import { Test, TestingModule } from '@nestjs/testing';
import { TiposServiciosController } from './tipos-servicio.controller';

describe('TipoServiciosController', () => {
  let controller: TiposServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposServiciosController],
    }).compile();

    controller = module.get<TiposServiciosController>(TiposServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});