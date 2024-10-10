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

  private async adjustSequence() {
    await this.productRepo.query(
      `SELECT setval('product_id_seq', (SELECT COALESCE(MAX(id), 0) FROM product) + 1);`
    );
  }

  create(createProductDto: CreateProductDto) {
    if (createProductDto.id != null) {
      throw new HttpException('No se debe ingresar un id para crear un producto', HttpStatus.BAD_REQUEST);
    }
    else {
      const product = this.productRepo.create(createProductDto);
      return this.productRepo.save(product);
    }
  }

  async delete(id: number) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException('Producto no encontrado :(');
    }
    else {
      this.productRepo.delete(id);
      await this.adjustSequence();
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException('Producto no encontrado :(');
    }
    else if (
      !id ||
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
    else if (updateProductDto.id != null) {
      throw new HttpException('No se debe ingresar un id para actualizar un producto', HttpStatus.BAD_REQUEST);
    }
    else {
      await this.productRepo.update(id, updateProductDto);
      await this.adjustSequence();
    }
  }


  //Filters

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne({where: {id}, relations:{category:true}});
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
    if (!id_category && !brand) {
      throw new HttpException('Solicitud incorrecta, debes filtrar por id_category o brand', HttpStatus.BAD_REQUEST);
    }
    else {
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
  }

  async search(filterDto: FilterDto) {
    const { name } = filterDto;
    if (!name) {
      throw new HttpException('Solicitud incorrecta, debes buscar con el parametro *name*', HttpStatus.BAD_REQUEST);
    }
    else {
      const products = await this.productRepo
        .createQueryBuilder('product')
        .where('product.name ILIKE :name', { name: `%${name}%` })
        .getMany();
      if (products.length === 0) {
        return 'No hay resultados para la busqueda';
      }
      return products;
    }
  }

  async sort(filterDto: FilterDto) {
    const { id_category, sort } = filterDto;
    if (!id_category) {
      throw new HttpException('Solicitud incorrecta, falta el parametro *id_category*, el cual debe contener el nombre de la categoria', HttpStatus.BAD_REQUEST);
    }
    else if (!sort) {
      throw new HttpException('Solicitud incorrecta, falta el parametro *sort*, el cual debe debe ser *asc* para orden ascendente o *desc* para orden descendente', HttpStatus.BAD_REQUEST);
    }
    else {
      const result = await this.filterByCategory(id_category);
      if (sort != 'asc' && sort != 'desc') {
        throw new HttpException('Error: El parámetro *sort* debe ser *asc* para orden ascendente o *desc* para orden descendente', HttpStatus.BAD_REQUEST);
      }
      else {
        if (sort === 'asc') {
          return result.sort((a, b) => a.price - b.price);
        }
        if (sort === 'desc') {
          return result.sort((a, b) => b.price - a.price);
        }
      }
    }
  }
}


