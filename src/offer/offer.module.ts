import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { DatabaseModule } from 'src/database/database.module';
import { offerProviders } from './offer.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [OfferController],
  providers: [...offerProviders, OfferService, JwtService],
})
export class OfferModule {}
