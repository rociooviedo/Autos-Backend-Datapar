import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgendamientosDto } from './agendamientos.dto';
import { AgendamientosService } from './agendamientos.service';

@ApiTags('Agendamientos')
@Controller('agendamientos')
export class AgendamientosController {

    constructor(private readonly service: AgendamientosService) {}

  @Get()
  async getMany() {
    const data = await this.service.getAll();
    return { data };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    return { data };
  }

  @Post()
  async createPost(@Body() dto: AgendamientosDto) {
    const data = await this.service.createOne(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: AgendamientosDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

}
