/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, Put, ParseIntPipe, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { QueryDto } from './dto/query.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  query(@Query() queryDto: QueryDto){
  if (queryDto.getId || queryDto.getid) {
    return this.categoriesService.getIdByName(queryDto);
  }
  return this.categoriesService.findAll();
  }

  @Get(':name')
  getCategory(@Param('name') name: string) {
    return this.categoriesService.findByName(name);
  }

  @Post() //  /categories (sin id)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Delete(':id') //categories/id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }
}
