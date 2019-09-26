
export class QuestionContentService {
    /* @Inject()
     private readonly angabenService: AngabeService;
 
     public angaben: AngabeDTO[] = [];
 
     constructor(
         @InjectRepository(QuestionNew)
         private readonly questionRepository: Repository<QuestionNew>,
         @InjectEntityManager('default')
         private readonly manager: EntityManager,
     ) { }
 
     public async getOne(id) {
         const question = await this.questionRepository.findOne(id, { relations: ["angaben"] });
         const helpangaben = question.angaben;
         const resolvedAngaben = await this.angabenService.getByIds(
             helpangaben.map(a => a.id),
         );
         this.manager.transaction(async manager => {
             for (let i = 0; i < resolvedAngaben.length; i++) {
                 console.log(await manager.query(`Select amount, einheit
                 From question_new_angaben_angabe
               where "question_new_angaben_angabe"."questionNewId" = $1
               and "question_new_angaben_angabe"."angabeId" = $2`, [question.id, resolvedAngaben[i].id]))
             }
         })
         console.log(question)
         return question;
     }
     */
}