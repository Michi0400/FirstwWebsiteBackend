import { Test, TestingModule } from '@nestjs/testing';
import { AnlageService } from './anlage.service';

describe('AnlageService', () => {
  let service: AnlageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnlageService],
    }).compile();

    service = module.get<AnlageService>(AnlageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
