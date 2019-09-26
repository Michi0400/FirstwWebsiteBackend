import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionDTO } from './model/question.dto';
import { QuestionNew } from './model/questionNew.entity';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) { }

  @Get('/')
  public async getAll() {
    return this.questionService.getAll();
  }

  @Post('/')
  public async create(@Body() question: QuestionDTO) {
    return this.questionService.create(question);
  }

  @Delete('/:id')
  public async delete(@Param('id') id): Promise<any> {
    return this.questionService.delete(id);
  }

  @Put('/:id')
  public async update(
    @Body() question: QuestionNew,
    @Param('id') id,
  ): Promise<any> {
    return this.questionService.update(id, question);
  }
}
