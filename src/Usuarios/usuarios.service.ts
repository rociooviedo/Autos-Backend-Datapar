import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';
import { ChangeUserPassDto } from './changeUserPass.dto';

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

      //Autenticación
      async getUserByLogin(login:string){
        return await this.repository.findOne({login});
      }

      async changePassword(dto:ChangeUserPassDto){
        const user = await this.repository.findOne({login:dto.login});
        if(user && await user.validatePassword(dto.password))
        {
            const editUser = Object.assign(user,{password:dto.newPassword});
            return await this.repository.save(editUser);
        }
        else
        {
            throw new NotFoundException('Error en el usuario y/o contraseña ... ');
        }
    }   

}
