/* eslint-disable prettier/prettier */
import { Injectable, forwardRef, Inject, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { ProductsService } from "../products/products.service";
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>
  ) { }

  async findByName(name: string): Promise<number> {
    const object = await this.categoryRepo.findOneBy({name:name});
    if (!object) {
      throw new HttpException("Categoria no encontrada", HttpStatus.NOT_FOUND);
    }
    return object.id;
  }

  async findCategory(cat: string) {
    const category = await this.findByName(cat);
    return category;
  }

  async getCategory(cat: string) {
    const id = await this.findCategory(cat);
    return this.productsService.filterByCategoryId(id);
  }

  filter(id: string) {
    return this.getCategory(id);
  }

  findAll(){
    return this.categoryRepo.find();
  }

  create(createCategoryDto: CreateCategoryDto) {
    const product = this.categoryRepo.create(createCategoryDto);
    return this.categoryRepo.save(product);
  }

  async delete(id: number) {
    const category = await this.categoryRepo.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException('Categoria no encontrado :(');
    }
    else {
      this.categoryRepo.delete(id);
    }
  }
  
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException('Categoria no encontrada :(');
    }
    else if (
      !updateCategoryDto.id ||
      !updateCategoryDto.name ||
      !updateCategoryDto.info
    ) {
      throw new HttpException('Faltan datos', HttpStatus.BAD_REQUEST);
    }
    else if (
      typeof updateCategoryDto.id != 'number'
    ) {
      throw new HttpException('El id debe ser un numero entero', HttpStatus.BAD_REQUEST);
    }
    else {
      await this.categoryRepo.update(id, updateCategoryDto);
    }
  }

  


  /*findByName(name: string): number {
    const object = this.categories.find((obj) => obj.name === name);
    if (!object) {
      throw new HttpException("Categoria no encontrada", HttpStatus.NOT_FOUND);
    }
    return object.id;
  }

  findCategory(cat: string) {
    const category = this.findByName(cat);
    return category;
  }

  getCategory(cat: string) {
    const id = this.findCategory(cat);
    return this.productsService.filterByCategoryId(id);
  }

  filter(name: string) {
    return this.categories.find((obj) => obj.name === name);
  }

  findAll(){
    return this.categories;
  }

  getHello() {
    return "Hola! Esta es la seccion de categorias";
  } */
}

