import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosController } from './servicios.controller';
import { ServiciosService } from './servicios.service';
import { Servicios } from './servicios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicios])],
  controllers: [ServiciosController],
  providers: [ServiciosService]
})
export class ServiciosModule {}
