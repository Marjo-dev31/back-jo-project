import { OrderEntity } from "src/orders/entities/order.entity";
import { orderProviders } from "src/orders/order.provider";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id :string

  @Column()
  offerId: string

  @Column()
  sportingEventId: string

  @ManyToOne(()=> OrderEntity, (order) => order.tickets)
  @JoinColumn({name: 'orderId'})
  order: OrderEntity
}