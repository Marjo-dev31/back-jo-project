import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderProviders } from './order.provider';
import { DatabaseModule } from '../database/database.module';
import { TicketsService } from '../tickets/tickets.service';
import { ticketProviders } from '../tickets/ticket.provider';
import { OfferService } from '../offer/offer.service';
import { offerProviders } from '../offer/offer.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [
    ...orderProviders,
    ...ticketProviders,
    ...offerProviders,
    OfferService,
    OrdersService,
    TicketsService,
    JwtService,
  ],
})
export class OrdersModule {}
