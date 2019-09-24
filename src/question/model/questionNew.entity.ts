import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anlage } from "../../anlage/model/anlage.entity";


@Entity()
export class QuestionNew {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('text')
    public input: string;

    @Column('text')
    public output: string;

    @ManyToMany(() => Anlage)
    @JoinTable()
    public anlagen: Anlage[];

    @Column('text')
    public anleitung: string;
}