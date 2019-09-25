import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Angabe } from '../angabe/model/angabe.entity';
import { QuestionNew } from './model/questionNew.entity';

@Injectable()
export class QuestionService {
    public angaben: Angabe[] = [];

    constructor(
        @InjectRepository(QuestionNew)
        private readonly questionRepository: Repository<QuestionNew>,
    ) { }

    public async getAll() {
        return this.questionRepository.find();
    }


    public async create(question: QuestionNew) {
        console.log(question.angaben)
        this.foreach(question.angaben)
        const q = new QuestionNew();
        q.input = question.input;
        q.output = question.output;
        //q.anlagen = question.anlagen;
        q.angaben = this.angaben;
        q.anleitung = question.anleitung;
        return await this.questionRepository.save(q);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.questionRepository.delete(id);
    }

    public async update(id: string, question: QuestionNew): Promise<UpdateResult> {
        return await this.questionRepository.update(id, question);
    }

    private foreach(angaben: Angabe[]) {
        for (let element of angaben) {
            const anlage = new Angabe();
            anlage.id = element.id;
            anlage.name = element.name;
            this.angaben.push(anlage);
        }
    }
}
