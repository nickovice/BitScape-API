// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':name')
  getCategory(@Param('name') name: string) {
    return this.categoriesService.filter(name);
  }

  @Post() //  /categories (sin id)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Delete(':id') //categories/id
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  // eslint-disable-next-line prettier/prettier
  update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }
}
