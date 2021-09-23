import { Status } from "src/enums/Status.enum";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne } from "typeorm";

@Entity()
export class Auto{
    @PrimaryGeneratedColumn()
    id: number;

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
    descripcion: string;

    @Column()
    situacion: Status;

    @OneToOne(() => Servicios, servicios => servicios.auto,{ cascade: true })
    servicios: Array<Servicios>;
   agendamiento: any;
}