import { Type } from "class-transformer";
import { tipos_agendamientos } from "src/enums/tipos_agendamientos.enum";
import { IsEnum, IsInt, IsOptional, IsString, Length, IsDate, IsNumber} from "class-validator";
import { tipo_periodo } from "src/enums/tipo_periodo.enum";

export class AgendamientosDto {

    @IsDate()
    @IsOptional()
    fecha_creacion: Date;

    @IsDate()
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion:string;

    @IsEnum(tipos_agendamientos)
    @IsOptional()
    tipo_agendamiento: tipos_agendamientos;

    @IsDate()
    @IsOptional()
    fecha_objetivo: Date;

    @IsEnum(tipo_periodo)
    @IsOptional()
    tipo_periodo: tipo_periodo;

    @IsNumber()
    @IsOptional()
    periodo:number;
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}