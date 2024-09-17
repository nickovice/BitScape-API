import { Module } from '@nestjs/common';
import { HwService } from './hw.service';
import { HwController } from './hw.controller';

@Module({
  providers: [HwService],
  controllers: [HwController]
})
export class HwModule {}
