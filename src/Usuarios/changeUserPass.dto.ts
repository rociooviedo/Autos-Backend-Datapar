import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
export class ChangeUserPassDto
{  
    @ApiProperty()
    @IsString()
    login: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString()
    newPassword: string;
}