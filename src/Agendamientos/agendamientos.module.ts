import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamiento } from './agendamientos.entity';
import { AgendamientosService } from './agendamientos.service';
import { AgendamientosController } from './agendamientos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamiento])],
  controllers: [AgendamientosController],
  providers: [AgendamientosService]
})
export class AgendamientosModule {}
