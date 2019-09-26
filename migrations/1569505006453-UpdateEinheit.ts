import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEinheit1569505006453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question_new" ADD "einheit" text`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question_new" DROP COLUMN "einheit"`, undefined);
    }

}
