import { TicketEntity } from '../../tickets/entities/tickets.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OfferEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('float')
  price: number;

  @Column('int', { default: 0 })
  numberOfSales: number;

  @Column()
  imgUrl: string;

  @OneToMany(() => TicketEntity, (ticket) => ticket.offer)
  tickets: TicketEntity[];
}
