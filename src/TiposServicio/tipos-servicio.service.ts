import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposServiciosDto } from './tipos-servicio.dto';
import { TiposServicios } from './tipos-servicio.entity';

@Injectable()
export class TiposServiciosService {
    constructor(
        @InjectRepository(TiposServicios)
        private readonly repository: Repository<TiposServicios>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Tipos de Servicio does not exist');
        return post;
      }
    
      async createOne(dto: TiposServiciosDto) {
        const tiposservicio = this.repository.create(dto);
        return await this.repository.save(tiposservicio);
      }
    
      async editOne(id: number, dto: TiposServiciosDto) {
        const tiposservicio = await this.repository.findOne(id);
    
        if (!tiposservicio) throw new NotFoundException('Tipos de Servicio does not exist');
    
        const editedtiposservicio = Object.assign(tiposservicio, dto);
        return await this.repository.save(editedtiposservicio);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
