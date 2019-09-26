import { Controller } from "@nestjs/common";
import { QuestionContentService } from "./questionContent.service";

@Controller('question/content')
export class QuestionContentController {
    constructor(private readonly questionContentService: QuestionContentService) { }

    /*@Get('/:id')
    public async getAll(@Param('id') id) {
        return this.questionContentService.getOne(id);
    }
    */
}