import { Module } from '@nestjs/common';
//import { HwModule } from './hw/hw.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ProductsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
