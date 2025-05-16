import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { DatabaseModule } from '../database/database.module';
import { ticketProviders } from './ticket.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [TicketsController],
  providers: [...ticketProviders, TicketsService, JwtService],
})
export class TicketsModule {}
