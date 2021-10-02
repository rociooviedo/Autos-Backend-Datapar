import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendamientosDto } from './agendamientos.dto';
import { Agendamiento } from './agendamientos.entity';

@Injectable()
export class AgendamientosService {
    constructor(
        @InjectRepository(Agendamiento)
        private readonly repository: Repository<Agendamiento>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Agendamiento does not exist');
        return post;
      }
    
      async createOne(dto: AgendamientosDto) {
        const agendamiento = this.repository.create(dto);
        return await this.repository.save(agendamiento);
      }
    
      async editOne(id: number, dto: AgendamientosDto) {
        const agendamiento = await this.repository.findOne(id);
    
        if (!agendamiento) throw new NotFoundException('Agendamientos does not exist');
    
        const editedagendamiento = Object.assign(agendamiento, dto);
        return await this.repository.save(editedagendamiento);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}