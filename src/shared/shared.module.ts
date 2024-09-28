/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { ProductsService } from '../products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  providers: [CategoriesService, ProductsService],
  exports: [CategoriesService, ProductsService],
  imports:[TypeOrmModule.forFeature([Product, Category])]
})
export class SharedModule {}
