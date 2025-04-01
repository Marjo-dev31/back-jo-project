import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SportingEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  imgUrl: string;
}
