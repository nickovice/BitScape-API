/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SharedModule, TypeOrmModule.forFeature([Product])]
})
export class ProductsModule {}
