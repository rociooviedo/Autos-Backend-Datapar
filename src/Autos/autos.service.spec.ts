import { Test, TestingModule } from '@nestjs/testing';
import { AutosService } from './autos.service';
//import { UsuariosService } from './usuarios.service';

describe('AutoService', () => {
  let service: AutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutosService],
    }).compile();

    service = module.get<AutosService>(AutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
