import { Test, TestingModule } from '@nestjs/testing';
import { HwController } from './hw.controller';

describe('HwController', () => {
  let controller: HwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HwController],
    }).compile();

    controller = module.get<HwController>(HwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
