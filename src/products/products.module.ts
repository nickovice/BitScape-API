/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SharedModule]
})
export class ProductsModule {}
