import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from 'src/Usuarios/usuarios.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [
      ConfigModule.forRoot(),
      UsuariosModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '3600s' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    exports: [AuthService],
  })
export class AuthModule {}