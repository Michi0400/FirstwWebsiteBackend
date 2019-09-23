import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionNew } from './model/questionNew.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuestionNew])],
    providers: [QuestionService],
    controllers: [QuestionController]
})
export class QuestionModule { }
