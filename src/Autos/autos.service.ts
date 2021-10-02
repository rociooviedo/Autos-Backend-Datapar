import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutosDto } from './autos.dto';
import { Auto } from './autos.entity';

@Injectable()
export class AutosService {
    constructor(
        @InjectRepository(Auto)
        private readonly repository: Repository<Auto>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Cars does not exist');
        return post;
      }
    
      async createOne(dto: AutosDto) {
        const auto = this.repository.create(dto);
        return await this.repository.save(auto);
      }
    
      async editOne(id: number, dto: AutosDto) {
        const auto = await this.repository.findOne(id);
    
        if (!auto) throw new NotFoundException('Cars does not exist');
    
        const editedauto = Object.assign(auto, dto);
        return await this.repository.save(editedauto);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}