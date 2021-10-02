import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposServiciosService } from './tipos-servicio.service';
import { TiposServiciosController } from './tipos-servicio.controller';
import { TiposServicios } from './tipos-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposServicios])],
  controllers: [TiposServiciosController],
  providers: [TiposServiciosService]
})
export class TiposServiciosModule {}
