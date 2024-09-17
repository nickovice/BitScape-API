import { Test, TestingModule } from '@nestjs/testing';
import { HwService } from './hw.service';

describe('HwService', () => {
  let service: HwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HwService],
    }).compile();

    service = module.get<HwService>(HwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
