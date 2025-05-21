import { DataSource } from 'typeorm';
import { TicketEntity } from './entities/tickets.entity';

export const ticketProviders = [
  {
    provide: 'TICKET_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TicketEntity),
    inject: ['DATA_SOURCE'],
  },
];
