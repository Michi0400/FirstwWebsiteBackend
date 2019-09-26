import { Inject, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, EntityManager, Repository, UpdateResult } from 'typeorm';
import { AngabeService } from '../angabe/angabe.service';
import { QuestionNew } from './model/questionNew.entity';

@Injectable()
export class QuestionService {
  @Inject()
  private readonly angabenService: AngabeService;

  constructor(
    @InjectRepository(QuestionNew)
    private readonly questionRepository: Repository<QuestionNew>,
    @InjectEntityManager('default')
    private readonly manager: EntityManager,
  ) {}

  public async getAll() {
    return this.questionRepository.find({ relations: ['angaben'] });
  }
  public async create({ name, description, angaben, anleitung }: QuestionNew) {
    const resolvedAngaben = await this.angabenService.getByIds(
      angaben.map(a => a.id),
    );
    const question = this.questionRepository.create({
      name,
      description,
      anleitung,
      angaben: resolvedAngaben,
    });
    await this.manager
      .createQueryBuilder()
      .update('question_new_angaben_angabe')
      .set({
        amount: 5,
      } as any)
      .where('questionNewId = :qid', { qid: question.id })
      .andWhere('angabeId = :aid', { aid: resolvedAngaben[0] })
      .execute();
    return this.questionRepository.save(question);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.questionRepository.delete(id);
  }

  public async update(
    id: string,
    question: QuestionNew,
  ): Promise<UpdateResult> {
    return this.questionRepository.update(id, question);
  }
}
