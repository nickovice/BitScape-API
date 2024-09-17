import { Module } from '@nestjs/common';
import { HwModule } from './hw/hw.module';

@Module({
  imports: [HwModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
