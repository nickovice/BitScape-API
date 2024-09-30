/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, Put, ParseIntPipe } from '@nestjs/common';
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
  
  @Get('/getid/:name')
  getCategoryId(@Param('name') name: string) {
    return this.categoriesService.getIdByName(name);
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
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }
}
