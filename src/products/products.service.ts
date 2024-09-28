/* eslint-disable prettier/prettier */
import { NotFoundException, HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { CategoriesService } from '../categories/categories.service';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(forwardRef(() => CategoriesService))
    private readonly categoriesService: CategoriesService,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>
  ) { }

  //Modifications to database
  create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    return this.productRepo.save(product);
  }

  async delete(id: number) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException('Producto no encontrado :(');
    }
    else {
      this.productRepo.delete(id);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException('Producto no encontrado :(');
    }
    else if (
      !updateProductDto.id_category ||
      !updateProductDto.brand ||
      !updateProductDto.name ||
      !updateProductDto.price ||
      !updateProductDto.info
    ) {
      throw new HttpException('Faltan datos', HttpStatus.BAD_REQUEST);
    }
    else if (
      typeof updateProductDto.id_category != 'number' ||
      typeof updateProductDto.price != 'number'
    ) {
      throw new HttpException('La categoria y el id deben ser numeros enteros', HttpStatus.BAD_REQUEST);
    }
    else {
      await this.productRepo.update(id, updateProductDto);
    }
  }


  //filters
  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Producto no encontrado :(`);
    }
    return product;
  }

  async filterByCategory(id_category: string) {
    const result = await this.categoriesService.findByName(id_category);
    return this.productRepo.findBy({ id_category: result });
  }

  filterByCategoryId(id_category: any) {
    return this.productRepo.findBy({ id_category: id_category });
  }

  filter(filterDto: FilterDto): any {
    const { id_category, brand } = filterDto;
    if (id_category) {
      return this.filterByCategory(id_category);
    }
    if (brand) {
      return this.productRepo
        .createQueryBuilder('product')
        .where('product.brand ILIKE :brand', { brand: `%${brand}%` })
        .getMany();
    }
  }

  search(filterDto: FilterDto) {
    const { name } = filterDto;
    return this.productRepo
      .createQueryBuilder('product')
      .where('product.name ILIKE :name', { name: `%${name}%` })
      .getMany();
  }

  async sort(filterDto: FilterDto) {
    const { id_category, sort } = filterDto;
    const result = await this.filterByCategory(id_category);
    if (sort === 'asc') {
      return result.sort((a, b) => a.price - b.price);
    }
    if (sort === 'desc') {
      return result.sort((a, b) => b.price - a.price);
    }

  }

  getHello() {
    return "Hola! Esta es la seccion de productos";
  }
}
