import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './autos.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Auto])],
  providers: [AutosService],
  controllers: [AutosController]
})
export class AutosModule {}
