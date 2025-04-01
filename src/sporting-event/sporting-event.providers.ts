import { DataSource } from 'typeorm';
import { SportingEventEntity } from './entities/sporting-event.entity';

export const sportingEventProviders = [
  {
    provide: 'SPORTING_EVENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SportingEventEntity),
    inject: ['DATA_SOURCE'],
  },
];
