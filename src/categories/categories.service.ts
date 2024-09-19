import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private category = [
    {
      id: 1,
      name: 'cpuAmd',
    },
    {
      id: 2,
      name: 'cpuIntel',
    },
    {
      id: 3,
      name: 'motherAmd',
    },
    {
      id: 4,
      name: 'motherIntel',
    },
    {
      id: 5,
      name: 'gpuNvidia',
    },
    {
      id: 6,
      name: 'gpuAmd',
    },
    {
      id: 7,
      name: 'ramDdr4',
    },
    {
      id: 8,
      name: 'ramDdr5',
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
      name: 'coolingAio',
    },
    {
      id: 13,
      name: 'coolingAir',
    },
    {
      id: 14,
      name: 'case',
    },
  ];
}
