/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { ProductsService } from '../products/products.service';

@Module({
  providers: [CategoriesService, ProductsService],
  exports: [CategoriesService, ProductsService]
})
export class SharedModule {}
