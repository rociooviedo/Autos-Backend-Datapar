import { tipo_usuario } from "src/enums/tipo_usuario.enum";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne } from "typeorm";
import { status } from "src/enums/Status.enum";
import { Agendamiento } from "src/Agendamientos/agendamientos.entity";
import { Servicios } from "src/Servicios/servicios.entity";

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
    contrasenha: string;

    @Column()
    tipo_usuario: tipo_usuario;
    
    @Column()
    status: status;

    @OneToMany(type => Agendamiento, agendamiento => agendamiento.usuario,{ cascade: true })
    agendamiento: Array<Agendamiento>;

    @OneToMany(type => Servicios, servicio => servicio.usuario,{ cascade: true })
    servicio: Array<Servicios>;
}