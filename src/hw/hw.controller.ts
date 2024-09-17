/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { HwService } from './hw.service';
import { FilterCpuDto } from './dto/filterCpu.dto';


@Controller('hw')
export class HwController {
  constructor(private readonly hwService: HwService) { }

  @Get('searchCpu')
  searchCpu(@Query() filterDto: FilterCpuDto) {
    return this.hwService.searchCpu(filterDto);
  }
  @Get('filterCpuByCores')
  filterCpuByCores(@Query() filterDto: FilterCpuDto) {
    return this.hwService.filterCpuByCores(filterDto);
  }
  @Get('filterCpuByArq')
  filterCpuByArq(@Query() filterDto: FilterCpuDto) {
    return this.hwService.filterCpuByArq(filterDto);
  }
  @Get('filterCpuByThreads')
  filterCpuByThreads(@Query() filterDto: FilterCpuDto) {
    return this.hwService.filterCpuByThreads(filterDto);
  }
  @Get('filterCpuBySocket')
  filterCpuBySocket(@Query() filterDto: FilterCpuDto) {
    return this.hwService.filterCpuBySocket(filterDto);
  }
  @Get('filterCpuByIgpu')
  filterCpuByIgpu(@Query() filterDto: FilterCpuDto) {
    return this.hwService.filterCpuByIgpu(filterDto);
  }
  
  // testing
  @Get('/:p1/:p2')
  idk(@Param('p1') p1: string, @Param('p2') p2: string) {
    return this.hwService.find2p(p1, p2);
  }
  @Get('/:something')
  getSomething() {
    return this.hwService.wtf();
  }


}
