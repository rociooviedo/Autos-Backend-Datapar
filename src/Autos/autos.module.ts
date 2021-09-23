import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosController } from './autos.controller';
import { Auto } from './autos.entity';
import { AutosService } from './autos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  controllers: [AutosController],
  providers: [AutosService]
})
export class AutosModule {}
