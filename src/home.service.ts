/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHello(): string {
    return 'Holaaaa, este es el home del sitio.';
  }
}