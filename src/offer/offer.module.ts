import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { DatabaseModule } from 'src/database/database.module';
import { offerProviders } from './offer.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OfferController],
  providers: [...offerProviders, OfferService],
})
export class OfferModule {}
