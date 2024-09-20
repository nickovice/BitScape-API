// eslint-disable-next-line prettier/prettier
import { Controller, Delete, Post, Query, Get, Body, Param, Put } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('filter') //filter? (id, id_category, brand)
  filter(@Query() filterDto: FilterDto) {
    return this.productsService.filter(filterDto);
  }

  @Get('search') //search?name
  search(@Query() filterDto: FilterDto) {
    return this.productsService.search(filterDto);
  }

  @Get('sort') //sort?id_category=x&sort=asc/desc
  sort(@Query() filterDto: FilterDto) {
    return this.productsService.sort(filterDto);
  }

  @Post() //  /products (sin id)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete('/:id') //products/id
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }
}
