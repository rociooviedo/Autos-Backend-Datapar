import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsuariosDto } from './usuarios.dto';
import { UsuariosService } from './usuarios.service';


@ApiTags('Users')
@Controller('users')
export class UsuariosController {

    constructor(private readonly service: UsuariosService) {}

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
  async createPost(@Body() dto: UsuariosDto) {
    const data = await this.service.createOne(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: UsuariosDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

}
