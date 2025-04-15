import { DataSource } from 'typeorm';
import { OrderEntity } from './entities/order.entity';


export const orderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(OrderEntity),
    inject: ['DATA_SOURCE'],
  },
];