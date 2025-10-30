import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';
import databaseConfig from './config/database.config';

const envFiles = (() => {
  const nodeEnv = process.env.NODE_ENV;
  const files: string[] = [];
  if (nodeEnv) files.push(`.env.${nodeEnv}`); // .env.development or .env.production
  files.push('.env.local', '.env');
  return files;
})();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: envFiles,
    }),
    // For test runs we may want to skip registering the global TypeOrmModule
    // (tests can register a TestDatabaseModule instead). Use the explicit
    // env var `SKIP_GLOBAL_TYPEORM=true` during tests to avoid double
    // initialization which can cause duplicate Postgres type creation errors.
    ...(process.env.SKIP_GLOBAL_TYPEORM === 'true'
      ? []
      : [
          TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
              type: configService.get<'postgres'>('database.type'),
              host: configService.get<string>('database.host'),
              port: configService.get<number>('database.port'),
              username: configService.get<string>('database.username'),
              password: configService.get<string>('database.password'),
              database: configService.get<string>('database.database'),
              ssl: configService.get<boolean>('database.ssl'),
              synchronize: configService.get<boolean>('database.synchronize'),
              logging: configService.get<boolean>('database.logging'),
              entities: [Product, Category],
            }),
            inject: [ConfigService],
          }),
        ]),
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
