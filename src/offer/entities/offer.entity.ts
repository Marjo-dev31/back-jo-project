import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OfferEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('int')
  price: number;

  @Column('int', { default: 0 })
  numberOfSales: number;

  @Column()
  imgUrl: string;

  constructor(offer: Partial<OfferEntity>) {
    Object.assign(this, offer);
  }
}
