import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosService } from './servicios.service';

describe('ServiciosService', () => {
  let servicios: ServiciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiciosService],
    }).compile();

    servicios = module.get<ServiciosService>(ServiciosService);
  });

  it('should be defined', () => {
    expect(servicios).toBeDefined();
  });
});
