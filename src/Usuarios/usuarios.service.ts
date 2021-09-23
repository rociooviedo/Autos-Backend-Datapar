import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly repository: Repository<Usuario>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Users does not exist');
        return post;
      }
    
      async createOne(dto: UsuariosDto) {
        const usuario = this.repository.create(dto);
        return await this.repository.save(usuario);
      }
    
      async editOne(id: number, dto: UsuariosDto) {
        const usuario = await this.repository.findOne(id);
    
        if (!usuario) throw new NotFoundException('Users does not exist');
    
        const editedusuario = Object.assign(usuario, dto);
        return await this.repository.save(editedusuario);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
