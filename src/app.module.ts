import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportingEventModule } from './sporting-event/sporting-event.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [SportingEventModule, OfferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
