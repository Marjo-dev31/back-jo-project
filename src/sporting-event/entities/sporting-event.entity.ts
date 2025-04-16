import { TicketEntity } from 'src/tickets/entities/tickets.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SportingEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  imgUrl: string;

  @OneToMany(() => TicketEntity, (ticket) => ticket.sportingEvent)
  tickets: TicketEntity[];
}
