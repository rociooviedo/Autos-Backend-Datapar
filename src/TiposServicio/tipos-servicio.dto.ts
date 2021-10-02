import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length} from "class-validator";
import { Auto } from "src/Autos/autos.entity";
import { Usuario } from "src/Usuarios/usuarios.entity";

export class TiposServiciosDto {
    @IsDate()
    @IsOptional()
    fecha_creacion: Date;

    @IsDate()
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion:string;

}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}