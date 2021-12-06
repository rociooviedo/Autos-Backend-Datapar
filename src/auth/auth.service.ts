import { Injectable } from "@nestjs/common";
import { UsuariosService } from "src/Usuarios/usuarios.service";
import { JwtService } from "@nestjs/jwt";
import { JWTPayload } from "./jwt.payload";

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService
    ) {}

    async validateUser(login: string, password: string): Promise<any> {
        const user = await this.usuariosService.getUserByLogin(login);
        if (user && user.password === password) {
            if(!login){
                return false;
            }
            return await user.validatePassword(password);
        }
    }
    async generateAccessToken(login: string) {
        const user = await this.usuariosService.getUserByLogin(login)
        const payload:JWTPayload = { login: user.login };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}