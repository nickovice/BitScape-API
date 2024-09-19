// eslint-disable-next-line prettier/prettier
import { Controller, Delete, Post, Query, Get, Body, Param } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductsService } from './products.service';

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

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
