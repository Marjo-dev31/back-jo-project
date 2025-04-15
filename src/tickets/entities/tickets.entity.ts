import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id :string

  @Column()
  orderId: string

  @Column()
  offerId: string

  @Column()
  sportingEventId: string

}