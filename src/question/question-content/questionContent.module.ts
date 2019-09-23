import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionNew } from "../model/questionNew.entity";
import { QuestionContentController } from "./questionContent.controller";
import { QuestionContentService } from "./questionContent.service";

@Module({
    imports: [TypeOrmModule.forFeature([QuestionNew])],
    providers: [QuestionContentService],
    controllers: [QuestionContentController]
})
export class QuestionContentModule { }