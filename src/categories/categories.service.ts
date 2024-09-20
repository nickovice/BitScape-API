import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly productsService: ProductsService) {}

  private category = [
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

  findOne(name: string): number {
    const object = this.category.find((obj) => obj.name === name);
    return object.id;
  }

  findCategory(cat: string) {
    const category = this.findOne(cat);
    return category;
  }

  getCategory(cat: string) {
    const id = this.findCategory(cat);
    return this.productsService.filterByCategory(id);
  }
}
