import { Type } from "class-transformer";
import { IsDate, isEnum, IsEnum, IsOptional, IsString, Length } from "class-validator";
import { Tipo_usuario } from "src/enums/tipo_usuario.enum";
import { Status } from "src/enums/Status.enum";

export class UsuariosDto {
    
    @Length(1)
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    contrasenha: string;

    @IsEnum(Status, {message:'Error en situacion'})
    situacion: Status;

    @IsEnum(Tipo_usuario,{message: 'Error en tipo usuario'})
    tipoUsuario: Tipo_usuario;
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}