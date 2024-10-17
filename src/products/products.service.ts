/* eslint-disable prettier/prettier */
import { NotFoundException, HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { QueryDto } from './dto/query.dto';
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

  async create(createProductDto: CreateProductDto) {
    if (createProductDto.id != null) {
      throw new HttpException('No se debe ingresar un id para crear un producto', HttpStatus.BAD_REQUEST);
    }
    else if (
      !createProductDto.category ||
      !createProductDto.brand ||
      !createProductDto.name ||
      !createProductDto.price ||
      !createProductDto.info
    ) {
      throw new HttpException('Faltan datos', HttpStatus.BAD_REQUEST);
    }
    else if (
      typeof createProductDto.category != 'number' ||
      typeof createProductDto.price != 'number'
    ) {
      throw new HttpException('La categoria y el precio deben ser numeros enteros', HttpStatus.BAD_REQUEST);
    }
    else {
      const product = this.productRepo.create({
        ...createProductDto,
        category: createProductDto.category,
      });
      await this.productRepo.save(product);
      return { message: `Producto creado con ID ${product.id}` }
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
      return { message: 'Producto eliminado' }
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException('Producto no encontrado :(');
    }
    else if (
      !id ||
      !updateProductDto.category ||
      !updateProductDto.brand ||
      !updateProductDto.name ||
      !updateProductDto.price ||
      !updateProductDto.info
    ) {
      throw new HttpException('Faltan datos', HttpStatus.BAD_REQUEST);
    }
    else if (
      typeof updateProductDto.category != 'number' ||
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
      return { message: 'Producto actualizado' }
    }
  }


  //Filters

  findAll() {
    return this.productRepo.find({ loadRelationIds: true });
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne({ where: { id }, relations: { category: true } });
    if (!product) {
      throw new NotFoundException(`Producto no encontrado :(`);
    }
    return product;
  }

  async filterByCategory(categoryName: string) {
    const category = await this.categoriesService.findByName(categoryName);
    return this.productRepo.find({
      where: { category },
      loadRelationIds: true, // Solo devuelve el ID de las relaciones
    });
  }

  async filterByCategoryId(id_category: any) {
    return await this.productRepo.findBy({ category: id_category });
  }

  categoryQuery(queryDto: QueryDto): any {
    const { category } = queryDto;
    return this.filterByCategory(category);
  }

  async brandQuery(queryDto: QueryDto) {
    const { brand } = queryDto;
    const result = await this.productRepo
      .createQueryBuilder('product')
      .where('product.brand ILIKE :brand', { brand: `%${brand}%` })
      .loadAllRelationIds()
      .getMany();
    if (result.length === 0) {
      throw new NotFoundException('No hay resultados para la busqueda');
    }
    else {
      return result
    }
  }

  async search(queryDto: QueryDto) {
    const { search } = queryDto;
    const products = await this.productRepo
      .createQueryBuilder('product')
      .where('product.name ILIKE :name', { name: `%${search}%` })
      .loadAllRelationIds()
      .getMany();
    if (products.length === 0) {
      throw new NotFoundException('No hay resultados para la busqueda');
    }
    return products;

  }

  async sort(queryDto: QueryDto) {
    const { category, sort } = queryDto;
    const result = await this.filterByCategory(category);
    if (sort !== 'asc' && sort !== 'desc') {
      throw new HttpException('Error: El parámetro *sort* debe ser *asc* para orden ascendente o *desc* para orden descendente', HttpStatus.BAD_REQUEST);
    }
    if (sort === 'asc') {
      return result.sort((a, b) => a.price - b.price);
    }
    if (sort === 'desc') {
      return result.sort((a, b) => b.price - a.price);
    }
  }

}


