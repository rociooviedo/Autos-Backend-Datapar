import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Length} from "class-validator";
import { Status } from "src/enums/Status.enum";

export class AutosDto {
    
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

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(Status, {message:'Error en situacion'})
    situacion: Status;

 
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}