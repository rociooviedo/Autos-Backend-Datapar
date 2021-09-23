import { Test, TestingModule } from '@nestjs/testing';
import { AgendamientosService } from './agendamientos.service';

describe('AgendamientosService', () => {
  let agendamiento: AgendamientosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamientosService],
    }).compile();

    agendamiento = module.get<AgendamientosService>(AgendamientosService);
  });

  it('should be defined', () => {
    expect(agendamiento).toBeDefined();
  });
});
