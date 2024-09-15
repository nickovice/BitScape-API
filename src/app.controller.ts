import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Funciones de prueba
  @Get('cpus/:marca/:arq')
  findProcessor(@Param('arq') arq: string, @Param('marca') marca: string) {
    return this.appService.find(marca, arq);
  }
  @Get('cpus/:dato')
  findByThing(@Param('dato') dato: string) {
    return this.appService.findByThing(dato);
  }
}
