import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../src/products/entities/product.entity';
import { Category } from '../src/categories/entities/category.entity';
import databaseConfig from '../src/config/database.config';

export const TestConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [databaseConfig],
  envFilePath: ['.env.test', '.env'], // Load test env first, fallback to regular .env
});

export const TestDatabaseModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: configService.get<'postgres'>('database.type'),
    host: configService.get<string>('database.host'),
    port: configService.get<number>('database.port'),
    username: configService.get<string>('database.username'),
    password: configService.get<string>('database.password'),
    database: configService.get<string>('database.database'),
    ssl: configService.get<boolean>('database.ssl'),
    entities: [Product, Category],
    synchronize: true,
    // Don't drop schema, just clean data in tests
    logging: false, // Disable logging in tests
  }),
  inject: [ConfigService],
});
