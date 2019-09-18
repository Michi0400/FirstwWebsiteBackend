import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Question {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('text')
    public input: string;

    @Column('text')
    public output: string;
}