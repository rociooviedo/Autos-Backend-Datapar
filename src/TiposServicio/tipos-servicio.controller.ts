import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TiposServiciosDto } from './tipos-servicio.dto';
import { TiposServiciosService } from './tipos-servicio.service';

@ApiTags('TiposServicios')
@Controller('tiposservicios')
export class TiposServiciosController {

    constructor(private readonly service: TiposServiciosService) {}

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
  async createPost(@Body() dto: TiposServiciosDto) {
    const data = await this.service.createOne(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: TiposServiciosDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

}
