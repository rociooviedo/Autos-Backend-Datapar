import { Type } from "class-transformer";
import { IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { tipo_usuario } from "src/enums/tipo_usuario.enum";
import { status } from "src/enums/Status.enum";

export class UsuariosDto {

    @IsDate()
    @IsOptional()
    fecha_creacion: Date;

    @IsDate()
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    login: string;

    @IsString()
    @IsOptional()
    contrasenha: string;

    @IsEnum(tipo_usuario,{message: 'Error en tipo usuario'})
    tipo_usuario: tipo_usuario;

    @IsEnum(status, {message:'Error en situacion'})
    status: status;
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}