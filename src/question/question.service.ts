import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { QuestionNew } from './model/questionNew.entity';

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(QuestionNew)
        private readonly questionRepository: Repository<QuestionNew>,
    ) { }

    public async getAll() {
        return this.questionRepository.find();
    }


    public async create(question: QuestionNew) {
        const q = new QuestionNew();
        q.input = question.input;
        q.output = question.output;
        q.angaben = question.angaben;
        q.anleitung = question.anleitung;
        return this.questionRepository.save(q);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.questionRepository.delete(id);
    }

    public async update(id: string, question: QuestionNew): Promise<UpdateResult> {
        return await this.questionRepository.update(id, question);
    }
}
