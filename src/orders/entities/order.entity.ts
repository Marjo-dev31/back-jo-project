import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  total: number;

  @CreateDateColumn()
  createAt: Date


  @Column()
  userId: string

  //useridcolumn
}
