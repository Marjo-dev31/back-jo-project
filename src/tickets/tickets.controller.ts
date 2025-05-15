import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  async findAll() {
    return await this.ticketsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findAllByUser(@Param('id') id: string) {
    return await this.ticketsService.findAllByUser(id);
  }
}
