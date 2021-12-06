import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./login.dto";

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() loginDto: LoginDto){
    const { login, password } = loginDto;
    const valid = await this.authService.validateUser(login, password);
    if (!valid) {
      throw new UnauthorizedException('Usuario y/o contraseña incorrectos ...');
    }
    return await this.authService.generateAccessToken(login);
  }
}