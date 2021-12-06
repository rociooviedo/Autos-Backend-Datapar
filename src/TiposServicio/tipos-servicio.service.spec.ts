import { Test, TestingModule } from '@nestjs/testing';
import { TiposServiciosService } from './tipos-servicio.service';

describe('TaskService', () => {
  let service: TiposServiciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposServiciosService],
    }).compile();

    service = module.get<TiposServiciosService>(TiposServiciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
