import { Test, TestingModule } from '@nestjs/testing';
import { AnlageController } from './anlage.controller';

describe('Anlage Controller', () => {
  let controller: AnlageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnlageController],
    }).compile();

    controller = module.get<AnlageController>(AnlageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
