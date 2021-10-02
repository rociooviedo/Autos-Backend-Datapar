import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Length, IsDate} from "class-validator";
import { disponibilidad } from "src/enums/disponibilidad.enum";

export class AutosDto {

    @IsDate()
    @IsOptional()
    fecha_creacion: Date;

    @IsDate()
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion:string;
    
    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @IsString()
    @IsOptional()
    fabricante: string;

    @IsString()
    @IsOptional()
    modelo: string;

    @IsInt()
    @IsOptional()
    kilometraje: number;

    @IsInt()
    @IsOptional()
    anhofabricacion: number;

    @IsInt()
    @IsOptional()
    anhomodelo: number;

    @IsEnum(disponibilidad, {message:'Error en disponibilidad'})
    disponibilidad: disponibilidad;

}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}