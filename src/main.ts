import { NestFactory } from '@nestjs/core';
import { HomeModule } from './home.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(HomeModule);
  app.enableCors();

  const configService = app.get(ConfigService);
  const port = 3000;
  const nodeEnv = configService.get<string>('NODE_ENV') || process.env.NODE_ENV;
  // Small informative log
  console.log(`Starting app in environment=${nodeEnv} on port=${port}`);

  await app.listen(port);
}
bootstrap();
