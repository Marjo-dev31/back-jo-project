import { TicketEntity } from "src/tickets/entities/tickets.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  total: number;

  @CreateDateColumn()
  createAt: Date

  @ManyToOne(()=> UserEntity, (user)=> user.id, {onDelete: "SET NULL"})
  @JoinColumn({name: 'userId'})
  user: UserEntity

  @OneToMany(()=> TicketEntity, (ticket)=> ticket.order)
  tickets: TicketEntity[]
}
