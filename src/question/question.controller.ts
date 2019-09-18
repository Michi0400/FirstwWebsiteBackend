import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Question } from './model/question.entity';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {

    constructor(private readonly questionService: QuestionService) { }

    @Get('/')
    public async getAll() {
        return this.questionService.getAll();
    }

    @Post('/')
    public async create(
        @Body() question: Question
    ) {
        return this.questionService.create(question)
    }

    @Delete('/:id')
    public async delete(@Param('id') id): Promise<any> {
        return this.questionService.delete(id);
    }

    @Put('/:id')
    public async update(@Body() question: Question, @Param('id') id): Promise<any> {
        return this.questionService.update(id, question)
    }
}
