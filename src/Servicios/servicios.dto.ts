import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length} from "class-validator";
import { Auto } from "src/Autos/autos.entity";
import { Tipo_servicio } from "src/enums/tipo_servicio.enum";
import { Usuario } from "src/Usuarios/usuarios.entity";

export class ServiciosDto {
    @IsEnum(Tipo_servicio)
    @IsOptional()
    tipo_servicio: Tipo_servicio;

    @IsNumber()
    @IsOptional()
    valor_servicio: number;

    @IsDate()
    @IsOptional()
    fecha_servicio: Date;

    @IsNumber()
    @IsOptional()
    kmInicial:number;
    
    @IsNumber()
    @IsOptional()
    kmFinal:number;

    @IsString()
    @IsOptional()
    descripcion:string;

    usuario:Usuario;

    auto:Auto;
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}