import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoppingItem {

    @PrimaryGeneratedColumn('uuid')
    public id: string;


    @Column()
    public name: string;
}