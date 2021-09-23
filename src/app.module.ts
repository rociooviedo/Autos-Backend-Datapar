import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './Usuarios/usuarios.module';
import { AutosModule } from './Autos/autos.module';
import { ServiciosModule } from './Servicios/servicios.module';
import { AgendamientosModule } from './Agendamientos/agendamientos.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'flotadatapar',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }), 
    UsuariosModule,
    AutosModule,
    ServiciosModule,
    AgendamientosModule,
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class AppModule {}
