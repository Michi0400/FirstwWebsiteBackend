import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnlageController } from './anlage.controller';
import { AnlageService } from './anlage.service';
import { Anlage } from './model/anlage.entity';

@Module({
  controllers: [AnlageController],
  imports: [TypeOrmModule.forFeature([Anlage])],
  providers: [AnlageService]
})
export class AnlageModule { }
