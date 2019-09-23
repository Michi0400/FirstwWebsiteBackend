import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class QuestionNew {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('text')
    public input: string;

    @Column('text')
    public output: string;

    @Column("simple-array")
    public angaben: string[];

    @Column('text')
    public anleitung: string;
}