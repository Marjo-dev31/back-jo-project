import { Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService){}

  @Get()
  async findAll(){
    return await this.ticketsService.findAll()
  }

  @Get(':id')
  async findAllByUser(@Param('id') id:string) {
    return await this.ticketsService.findAllByUser(id)
  }
}
