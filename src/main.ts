import { NestFactory } from '@nestjs/core';
import { HomeModule } from './home.module';
import { config } from 'dotenv';

config(); // Carga las variables de entorno

async function bootstrap() {
  const app = await NestFactory.create(HomeModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
