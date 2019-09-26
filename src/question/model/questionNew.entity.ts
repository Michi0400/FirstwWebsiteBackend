import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Angabe } from '../../angabe/model/angabe.entity';

@Entity() // Gericht --> Zum essen
export class QuestionNew {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public name: string;

  @Column('text')
  public description: string;

  @ManyToMany(() => Angabe)
  @JoinTable()
  public angaben: Angabe[];

  @Column('text')
  public anleitung: string;

  @Column('text', { nullable: true })
  public einheit: string;
}
