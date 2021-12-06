import { tipos_agendamientos } from "src/enums/tipos_agendamientos.enum";
import { tipo_periodo } from "src/enums/tipo_periodo.enum";
import { Usuario } from "src/Usuarios/usuarios.entity";
import { Auto } from "src/Autos/autos.entity";
import { TiposServicios } from "src/TiposServicio/tipos-servicio.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne, ManyToOne } from "typeorm";

@Entity()
export class Agendamiento{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    tipo_agendamiento: tipos_agendamientos;

    @Column()
    fecha_objetivo: Date;

    @Column()
    tipo_periodo: tipo_periodo;

    @Column()
    periodo: number;
    
    @ManyToOne(() => Auto, (auto) => auto.agendamiento, {nullable: false, onDelete: 'CASCADE',})
        auto: Auto;
    
    @ManyToOne(() => Usuario, (usuario) => usuario.agendamiento, {nullable: false, onDelete: 'CASCADE',})
        usuario: Usuario;
    
    @ManyToOne(() => TiposServicios, (tiposservicio) => tiposservicio.agendamiento, {nullable: false, onDelete: 'CASCADE',})
        tiposservicio: TiposServicios;

}