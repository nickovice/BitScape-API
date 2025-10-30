import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../src/products/entities/product.entity';
import { Category } from '../src/categories/entities/category.entity';

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
  // Drop and recreate schema for each test run to avoid leftover DB types/objects
  dropSchema: true,
  // Don't keep verbose SQL logging during tests
  logging: false,
  }),
  inject: [ConfigService],
});
