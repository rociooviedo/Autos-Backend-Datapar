import { Column, Entity, PrimaryGeneratedColumn,OneToMany, ManyToOne } from "typeorm";
import { Agendamiento } from "src/Agendamientos/agendamientos.entity";
import { Servicios } from "src/Servicios/servicios.entity";

@Entity()
export class TiposServicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

    @OneToMany(type => Agendamiento, agendamiento => agendamiento.tiposservicio,{ cascade: true })
    agendamiento: Agendamiento;

    @OneToMany(type => Servicios, servicios => servicios.tiposservicio,{ cascade: true })
    servicios: Servicios;

}