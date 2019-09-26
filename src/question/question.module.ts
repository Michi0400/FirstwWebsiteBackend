import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AngabeService } from '../angabe/angabe.service';
import { Angabe } from '../angabe/model/angabe.entity';
import { QuestionNew } from './model/questionNew.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionNew, Angabe], 'default')],
  providers: [QuestionService, AngabeService],
  controllers: [QuestionController],
})
export class QuestionModule {}
