/* eslint-disable prettier/prettier */
import { Injectable, forwardRef, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { ProductsService } from "../products/products.service";
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
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

  filter(id: number) {
    return this.categoryRepo.findBy({ id: id });
  }

  findAll(){
    return this.categoryRepo.find();
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

