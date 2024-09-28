import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getHello(): string {
    return this.categoriesService.getHello();
  }

  @Get('all')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id') id: number) {
    return this.categoriesService.filter(id);
  }
}
