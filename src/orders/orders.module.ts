import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderProviders } from './ticket.provider';
import { DatabaseModule } from 'src/database/database.module';
import { TicketsService } from 'src/tickets/tickets.service';
import { ticketProviders } from 'src/tickets/order.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [...orderProviders, ...ticketProviders, OrdersService, TicketsService],
})
export class OrdersModule {}
