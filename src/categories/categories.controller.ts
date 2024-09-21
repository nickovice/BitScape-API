import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getHello(): string {
    return this.categoriesService.getHello();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoriesService.getCategory(id);
  }

  @Get('findAll')
  findAll() {
    return this.categoriesService.findAll();
  }
}
