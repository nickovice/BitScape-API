/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SharedModule]
})
export class CategoriesModule {}
