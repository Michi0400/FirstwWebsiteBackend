import { Inject, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, EntityManager, Repository, UpdateResult } from 'typeorm';
import { AngabeService } from '../angabe/angabe.service';
import { QuestionDTO } from './model/question.dto';
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
  ) { }

  public async getAll() {
    return this.questionRepository.find({ relations: ['angaben'] });
  }
  public async create({ name, description, angaben, anleitung }: QuestionDTO) {
    const resolvedAngaben = await this.angabenService.getByIds(
      angaben.map(a => a.id),
    );
    const question = this.questionRepository.create({
      name,
      description,
      anleitung,
      angaben: resolvedAngaben,
    });

    const q = await this.questionRepository.save(question);
    this.manager.transaction(async manager => {
      for (let i = 0; i < resolvedAngaben.length; i++) {
        await manager.query(`Update question_new_angaben_angabe set amount = $1, einheit = $2
        where "question_new_angaben_angabe"."questionNewId" = $3
        and "question_new_angaben_angabe"."angabeId" = $4`, [angaben[i].menge, angaben[i].einheit, q.id, resolvedAngaben[i].id])
      }
    })
    return q;
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
