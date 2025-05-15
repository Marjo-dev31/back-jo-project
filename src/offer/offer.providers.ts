import { DataSource } from 'typeorm';
import { OfferEntity } from './entities/offer.entity';

export const offerProviders = [
  {
    provide: 'OFFER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(OfferEntity),
    inject: ['DATA_SOURCE'],
  },
];
