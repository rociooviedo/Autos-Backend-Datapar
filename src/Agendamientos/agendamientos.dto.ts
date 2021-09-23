import { Type } from "class-transformer";
import { Tipo_servicio } from "src/enums/tipo_servicio.enum";
import { IsEnum, IsInt, IsOptional, IsString, Length, IsDate} from "class-validator";
import { Status } from "src/enums/Status.enum";

export class AgendamientosDto {
    @IsEnum(Tipo_servicio)
    @IsOptional()
    tipo_servicio: Tipo_servicio;

    @IsDate()
    @IsOptional()
    fecha_programada: Date;


    @IsString()
    @IsOptional()
    descripcion:string;
 
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}