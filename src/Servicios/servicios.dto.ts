import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsString, Length, IsDate, IsNumber} from "class-validator";
import { estado } from "src/enums/estado.enum";
import { Usuario } from "src/Usuarios/usuarios.entity";
import { Auto } from "src/Autos/autos.entity";

export class ServiciosDto {

    @IsDate()
    @IsOptional()
    fecha_creacion: Date;

    @IsDate()
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion:string;

    @IsDate()
    @IsOptional()
    fecha_inicio: Date;

    @IsDate()
    @IsOptional()
    fecha_fin: Date;

    @IsNumber()
    @IsOptional()
    km_inicial: number;

    @IsNumber()
    @IsOptional()
    km_final: number;

    @IsNumber()
    @IsOptional()
    valor_servicio: number;

    @IsEnum(estado, {message:'Error en estado'})
    estado: estado;
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}