import { OfferEntity } from "src/offer/entities/offer.entity";
import { OrderEntity } from "src/orders/entities/order.entity";
import { SportingEventEntity } from "src/sporting-event/entities/sporting-event.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id :string

  @ManyToOne(()=> OfferEntity, (offer)=> offer.tickets, {cascade: true})
  @JoinColumn({name: 'offerId'})
  offer: OfferEntity

  @ManyToOne(()=>SportingEventEntity, (sportingEvent)=> sportingEvent.tickets, {cascade: true})
  @JoinColumn({name:' sportingEventId'})
  sportingEvent: SportingEventEntity

  @ManyToOne(()=> OrderEntity, (order) => order.tickets, {cascade: true})
  @JoinColumn({name: 'orderId'})
  order: OrderEntity

  @Column()
  ticketKey: string

  @CreateDateColumn()
  createAt: Date
}