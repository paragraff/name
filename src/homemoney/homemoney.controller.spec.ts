import { Test, TestingModule } from '@nestjs/testing';
import { HomemoneyController } from './homemoney.controller';

describe('HomemoneyController', () => {
  let controller: HomemoneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomemoneyController],
    }).compile();

    controller = module.get<HomemoneyController>(HomemoneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
