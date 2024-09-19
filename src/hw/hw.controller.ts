/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { HwService } from './hw.service';
import { FilterDto } from './dto/filter.dto';

@Controller('hw')
export class HwController {
  constructor(private readonly hwService: HwService) { }
 
  @Get('filter') //filter? (id, id_category, brand)
  filter(@Query() filterDto: FilterDto) {
    return this.hwService.filter(filterDto);
  }
  @Get('search') //search?name
  search(@Query() filterDto: FilterDto) {
    return this.hwService.search(filterDto);
  }
  @Get('sort') //sort?id_category=x&sort=asc/desc
  sort(@Query() filterDto: FilterDto) {
    return this.hwService.sort(filterDto);
  }

  /* testing
  @Get('/:p1/:p2')
  idk(@Param('p1') p1: string, @Param('p2') p2: string) {
    return this.hwService.find2p(p1, p2);
  }
  */

}
