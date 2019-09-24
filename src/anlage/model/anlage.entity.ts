import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anlage {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;
}