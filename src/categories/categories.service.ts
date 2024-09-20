/* eslint-disable prettier/prettier */
import { Injectable, forwardRef, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService
  ) { }

  private categories = [
    {
      id: 1,
      name: 'amd_cpu',
    },
    {
      id: 2,
      name: 'intel_cpu',
    },
    {
      id: 3,
      name: 'amd_motherboard',
    },
    {
      id: 4,
      name: 'intel_motherboard',
    },
    {
      id: 5,
      name: 'nvidia_gpu',
    },
    {
      id: 6,
      name: 'amd_gpu',
    },
    {
      id: 7,
      name: 'ram_ddr4',
    },
    {
      id: 8,
      name: 'ram_ddr5',
    },
    {
      id: 9,
      name: 'ssd',
    },
    {
      id: 10,
      name: 'hdd',
    },
    {
      id: 11,
      name: 'psu',
    },
    {
      id: 12,
      name: 'aio_cooling',
    },
    {
      id: 13,
      name: 'air_cooling',
    },
    {
      id: 14,
      name: 'case',
    },
  ];

  findByName(name: string): number {
    const object = this.categories.find((obj) => obj.name === name);
    if (!object) {
      throw new HttpException('Categoria no encontrada', HttpStatus.NOT_FOUND);
    }
    return object.id
  }

  findCategory(cat: string) {
    const category = this.findByName(cat);
    return category;
  }

  getCategory(cat: string) {
    const id = this.findCategory(cat);
    return this.productsService.filterByCategoryV2(id);
  }

  filter(name: string) {
    return this.categories.find((obj) => obj.name === name);
  }
}
