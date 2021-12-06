import { tipo_usuario } from "src/enums/tipo_usuario.enum";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { status } from "src/enums/Status.enum";
import { Agendamiento } from "src/Agendamientos/agendamientos.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { classToPlain, Exclude } from "class-transformer";
import * as bcrypt from 'bcrypt';

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Column()
    @Exclude({ toPlainOnly: true})
    password: string; //contraseña

    @Column()
    tipo_usuario: tipo_usuario;
    
    @Column()
    status: status;

    @OneToMany(type => Agendamiento, agendamiento => agendamiento.usuario,{ cascade: true })
    agendamiento: Array<Agendamiento>;

    @OneToMany(type => Servicios, servicio => servicio.usuario,{ cascade: true })
    servicio: Array<Servicios>;

    //Funciones de autenticación
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if(!this.password){
        this.password = this.login;
      }
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }

    async validatePassword(password: string){
        return await bcrypt.compareSync(password, this.password);
      }
}