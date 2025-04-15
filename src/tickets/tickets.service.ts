import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TicketEntity } from './entities/tickets.entity';
import { cartItemDto } from 'src/orders/dto/cartItem.dto';

@Injectable()
export class TicketsService {
  constructor(
    @Inject('TICKET_REPOSITORY')
    private ticketRepository: Repository<TicketEntity>,
  ) {}

 async findAll() {
    return await this.ticketRepository.find();
  }

  async create(cart: cartItemDto[], newOrderId: string) {
    let ticketsArray = []
    await Promise.all(
      cart.map(async (element: cartItemDto) => {
        for (let i = 0; i < element.quantity; i++) {
          const ticket = {
            orderId: newOrderId,
            offerId: element.offerId,
            sportingEventId: element.sportingEventId,
          };
          const newTicket = await this.ticketRepository.create(ticket);
          const tickets = await this.ticketRepository.save(newTicket);
         ticketsArray.push(tickets)
        }
      }),
    );
    return ticketsArray;
  }
}
