import { Auto } from "src/Autos/autos.entity";
import { Status } from "src/enums/Status.enum";
import { Tipo_servicio } from "src/enums/tipo_servicio.enum";
import { Usuario } from "src/Usuarios/usuarios.entity";

import { Column, Entity, PrimaryGeneratedColumn,OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion:string;

    @Column()
    tipo_servicio:Tipo_servicio;

    @Column()
    valor_servicio:number;

    @Column()
    fecha_servicio:Date;

    @Column()
    kmInicial:number;

    @Column()
    kmFinal:number;

    @ManyToOne(type => Usuario, usuario =>usuario.servicios)
    usuario:Usuario;

    @ManyToOne(type => Auto, auto => auto.servicios)
    auto:Auto;
}