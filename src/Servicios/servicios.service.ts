import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiciosDto } from './servicios.dto';
import { Servicios } from './servicios.entity';


@Injectable()
export class ServiciosService {
    constructor(
        @InjectRepository(Servicios)
        private readonly repository: Repository<Servicios>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Servicio does not exist');
        return post;
      }
    
      async createOne(dto: ServiciosDto) {
        const servicio = this.repository.create(dto);
        return await this.repository.save(servicio);
      }
    
      async editOne(id: number, dto: ServiciosDto) {
        const servicio = await this.repository.findOne(id);
    
        if (!servicio) throw new NotFoundException('Servicio does not exist');
    
        const editedservicio = Object.assign(servicio, dto);
        return await this.repository.save(editedservicio);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
