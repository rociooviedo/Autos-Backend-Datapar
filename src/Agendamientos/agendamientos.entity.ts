import { Status } from "src/enums/Status.enum";
import { Tipo_servicio } from "src/enums/tipo_servicio.enum";
import { Auto } from "src/Autos/autos.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne } from "typeorm";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";

@Entity()
export class Agendamiento{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion:string;

    @Column()
    tipo_servicio:Tipo_servicio;

    @Column()
    fecha_programada:Date;


    @OneToOne(type => Auto, auto =>auto.agendamiento)
    auto:Auto;

}