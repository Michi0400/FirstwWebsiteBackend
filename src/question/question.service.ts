import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AngabeService } from '../angabe/angabe.service';
import { QuestionNew } from './model/questionNew.entity';

@Injectable()
export class QuestionService {
    @Inject()
    private readonly angabenService: AngabeService;

    constructor(
        @InjectRepository(QuestionNew)
        private readonly questionRepository: Repository<QuestionNew>,
    ) { }

    public async getAll() {
        return this.questionRepository.find({ relations: ["angaben"] });
    }
    public async create({ name, description, angaben, anleitung }: QuestionNew) {
        const question = this.questionRepository.create({
            name,
            description,
            anleitung,
            angaben: await this.angabenService.getByIds(angaben.map(a => a.id))
        });
        return this.questionRepository.save(question);
    }

    public async delete(id: string): Promise<DeleteResult> {
        return this.questionRepository.delete(id);
    }

    public async update(id: string, question: QuestionNew): Promise<UpdateResult> {
        return this.questionRepository.update(id, question);
    }
}
