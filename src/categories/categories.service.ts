/* eslint-disable prettier/prettier */
import { Injectable, forwardRef, Inject, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { ProductsService } from "../products/products.service";
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { QueryDto } from './dto/query.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>
  ) { }

  private async adjustSequence() {
    await this.categoryRepo.query(
      `SELECT setval('category_id_seq', (SELECT COALESCE(MAX(id), 0) FROM category) + 1);`
    );
  }

  async findByName(name: string): Promise<Category> {
    const object = await this.categoryRepo.findOneBy({ name });
    if (!object) {
      throw new HttpException("Categoria no encontrada", HttpStatus.NOT_FOUND);
    }
    return object;
  }

  async getIdByName(queryDto: QueryDto) {
    if (queryDto.getId) {
      const object = await this.categoryRepo.findOneBy({ name: queryDto.getId });
      if (!object) {
        throw new HttpException("Categoria no encotrada. Uso: getid/<nombre>", HttpStatus.NOT_FOUND);
      }
      return { message: object.id };
    }
    else {
      const object = await this.categoryRepo.findOneBy({ name: queryDto.getid });
      if (!object) {
        throw new HttpException("Categoria no encotrada. Uso: getid/<nombre>", HttpStatus.NOT_FOUND);
      }
      return { message: object.id };
    }
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

  findAll() {
    return this.categoryRepo.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async create(createCategoryDto: CreateCategoryDto) {
    if (createCategoryDto.id != null) {
      throw new HttpException('No se debe ingresar un id para crear una categoria', HttpStatus.BAD_REQUEST);
    }
    await this.adjustSequence();
    const category = this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(category);
    return { message: `Categoria creada con ID ${category.id} y nombre ${category.name}` }
  }

  async delete(id: number) {
    const category = await this.categoryRepo.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException('Categoria no encontrada :(');
    }
    else {
      await this.adjustSequence();
      this.categoryRepo.delete(id);
      await this.adjustSequence();
      return { message: "Categoria borrada" }
    }
  }
  
  

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException('Categoria no encontrada :(');
    }
    else if (
      !id ||
      !updateCategoryDto.name ||
      !updateCategoryDto.info
    ) {
      throw new HttpException('Faltan datos', HttpStatus.BAD_REQUEST);
    }
    else if (updateCategoryDto.id != null) {
      throw new HttpException('No se debe ingresar un id para actualizar una categoria', HttpStatus.BAD_REQUEST);
    }
    else {
      await this.adjustSequence();
      await this.categoryRepo.update(id, updateCategoryDto);
      await this.adjustSequence();
      return { message: "Categoria actualizada" }
    }
  }

}

