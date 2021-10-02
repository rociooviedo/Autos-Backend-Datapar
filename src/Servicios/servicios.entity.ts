import { estado } from "src/enums/estado.enum";
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne, OneToOne } from "typeorm";
import { Auto } from "src/Autos/autos.entity";
import { Usuario } from "src/Usuarios/usuarios.entity";
import { TiposServicios } from "src/TiposServicio/tipos-servicio.entity";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;

    @Column()
    km_inicial: number;

    @Column()
    km_final: number;

    @Column()
    valor_servicio: number;
    
    @Column()
    estado: estado;

    @ManyToOne(() => Auto, (auto) => auto.servicio, {nullable: false, onDelete: 'CASCADE',})
        auto: Auto;
    
    @ManyToOne(() => Usuario, (usuario) => usuario.servicio, {nullable: false, onDelete: 'CASCADE',})
        usuario: Usuario;
    
    @ManyToOne(() => TiposServicios, (tiposservicio) => tiposservicio.servicios, {nullable: false, onDelete: 'CASCADE',})
        tiposservicio: TiposServicios;
    
}