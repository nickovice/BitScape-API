/* eslint-disable prettier/prettier */
import { Injectable, forwardRef, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { ProductsService } from "../products/products.service";

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService,
  ) { }

  private categories = [
    {
      id: 1,
      name: "amd_cpu",
      info: "CPUs AMD"
    },
    {
      id: 2,
      name: "intel_cpu",
      info: "CPUs Intel"
    },
    {
      id: 3,
      name: "amd_motherboard",
      info: "Motherboards AMD"
    },
    {
      id: 4,
      name: "intel_motherboard",
      info: "Motherboards Intel"
    },
    {
      id: 5,
      name: "nvidia_gpu",
      info: "GPUs Nvidia"

    },
    {
      id: 6,
      name: "amd_gpu",
      info: "GPUs AMD"
    },
    {
      id: 7,
      name: "ram_ddr4",
      info: "RAM DDR4"
    },
    {
      id: 8,
      name: "ram_ddr5",
      info: "RAM DDR5"
    },
    {
      id: 9,
      name: "ssd",
      info: "Almacenamiento SSD"
    },
    {
      id: 10,
      name: "hdd",
      info: "Almacenamiento HDD"
    },
    {
      id: 11,
      name: "psu",
      info: "Fuentes de poder"
    },
    {
      id: 12,
      name: "aio_cooling",
      info: "Refrigeración líquida"
    },
    {
      id: 13,
      name: "air_cooling",
      info: "Refrigeración por aire"
    },
    {
      id: 14,
      name: "case",
      info: "Gabinetes"
    },
  ];

  findByName(name: string): number {
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
    return this.productsService.filterByCategoryV2(id);
  }

  filter(name: string) {
    return this.categories.find((obj) => obj.name === name);
  }

  findAll(){
    return this.categories;
  }

  getHello() {
    return "Hola! Esta es la seccion de categorias";
  }

}

