import { Status } from "src/enums/Status.enum";
import { Tipo_usuario } from "src/enums/tipo_usuario.enum";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    contrasenha: string;

    @Column()
    tipo_usuario: Tipo_usuario;

    @Column()
    status: Status;

    @OneToOne(() => Servicios, servicios => servicios.usuario,{ cascade: true })
    servicios: Array<Servicios>;
}