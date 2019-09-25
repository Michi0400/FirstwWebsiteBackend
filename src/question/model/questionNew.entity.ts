import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Angabe } from "../../angabe/model/angabe.entity";


@Entity()
export class QuestionNew {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('text')
    public input: string;

    @Column('text')
    public output: string;

    @ManyToMany(() => Angabe)
    @JoinTable()
    public angaben: Angabe[];

    @Column('text')
    public anleitung: string;
}