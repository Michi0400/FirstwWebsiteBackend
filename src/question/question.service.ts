import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Question } from './model/question.entity';

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(Question)
        private readonly questionRepository: Repository<Question>,
    ) { }

    public async getAll() {
        return this.questionRepository.find();
    }


    public async create(question: Question) {
        const q = new Question();
        q.input = question.input;
        q.output = question.output
        return this.questionRepository.save(q);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.questionRepository.delete(id);
    }

    public async update(id: string, question: Question): Promise<UpdateResult> {
        return await this.questionRepository.update(id, question);
    }
}
