/* eslint-disable prettier/prettier */
import { Controller, Delete, Post, Query, Get, Body, Param, Put, ParseIntPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { QueryDto } from './dto/query.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  query(@Query() queryDto: QueryDto) {
    if (queryDto.search) {
      return this.productsService.search(queryDto);
    }
    if (queryDto.brand) {
      return this.productsService.brandQuery(queryDto);
    }
    if (queryDto.category) {
      if (queryDto.sort) {
        return this.productsService.sort(queryDto);
      }
      return this.productsService.categoryQuery(queryDto);
    }
    return this.productsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post() //  /products (sin id)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id') //products/id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
  
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }
}
