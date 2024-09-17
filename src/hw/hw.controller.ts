/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { HwService } from './hw.service';

@Controller('hw')
export class HwController {
    constructor(private readonly hwService: HwService) {}

    @Get('/:something')
    getSomething() {
        return this.hwService.wtf();
    }
}
