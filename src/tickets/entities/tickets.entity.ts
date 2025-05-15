import { OfferEntity } from '../../offer/entities/offer.entity';
import { OrderEntity } from '../../orders/entities/order.entity';
import { SportingEventEntity } from '../../sporting-event/entities/sporting-event.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => OfferEntity, (offer) => offer.tickets, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'offerId' })
  offer: OfferEntity;

  @ManyToOne(
    () => SportingEventEntity,
    (sportingEvent) => sportingEvent.tickets,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn({ name: ' sportingEventId' })
  sportingEvent: SportingEventEntity;

  @ManyToOne(() => OrderEntity, (order) => order.tickets, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'orderId' })
  order: OrderEntity;

  @Column()
  ticketKey: string;

  @CreateDateColumn()
  createAt: Date;
}
