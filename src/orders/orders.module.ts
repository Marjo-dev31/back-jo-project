import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderProviders } from './order.provider';
import { DatabaseModule } from 'src/database/database.module';
import { TicketsService } from 'src/tickets/tickets.service';
import { ticketProviders } from 'src/tickets/ticket.provider';
import { OfferService } from 'src/offer/offer.service';
import { offerProviders } from 'src/offer/offer.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [...orderProviders, ...ticketProviders, ...offerProviders, OfferService, OrdersService, TicketsService],
})
export class OrdersModule {}
