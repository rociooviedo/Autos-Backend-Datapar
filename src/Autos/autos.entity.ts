import { disponibilidad } from "src/enums/disponibilidad.enum";
import { Agendamiento } from "src/Agendamientos/agendamientos.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne } from "typeorm";

@Entity()
export class Auto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    chapa: string;

    @Column()
    chasis: string;

    @Column()
    fabricante: string;

    @Column()
    modelo: string;

    @Column()
    kilometraje: number;

    @Column()
    anhofabricacion: number;

    @Column()
    anhomodelo: number;

    @Column()
    disponibilidad: disponibilidad;

    @OneToMany(type => Agendamiento, agendamiento => agendamiento.auto,{ cascade: true })
    agendamiento: Agendamiento;

    @OneToMany(type => Servicios, servicios => servicios.auto,{ cascade: true })
    servicio: Servicios;
}