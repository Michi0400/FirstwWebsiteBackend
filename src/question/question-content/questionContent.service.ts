import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionNew } from "../model/questionNew.entity";

@Injectable()
export class QuestionContentService {

    constructor(
        @InjectRepository(QuestionNew)
        private readonly questionRepository: Repository<QuestionNew>,
    ) { }

    public async getOne(id) {
        return this.questionRepository.findOne(id, { relations: ["angaben"] });
    }
}