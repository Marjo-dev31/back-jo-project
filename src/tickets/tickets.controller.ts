import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { get } from 'http';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService){}

  @Get()
  findAll(){
    return this.ticketsService.findAll()
  }
}
