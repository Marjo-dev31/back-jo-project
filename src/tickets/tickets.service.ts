import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TicketEntity } from './entities/tickets.entity';
import { cartItemDto } from 'src/orders/dto/cartItem.dto';
import { OrdersService } from 'src/orders/orders.service';

@Injectable()
export class TicketsService {
  constructor(
    @Inject('TICKET_REPOSITORY')
    private ticketRepository: Repository<TicketEntity>,
    // private orderService: OrdersService
  ) {}

  async findAll() {
    return await this.ticketRepository.find();
  }

  async findAllByUser(id: string) {
    const response = await this.ticketRepository.find({
      relations: {
        order: {
          user: true},
      },
      where: {
        order : {
          user: {id : id}
        }
      }
    }
    )
return response
  }

  async create(cart: cartItemDto[], newOrderId: string) {
    let ticketsArray = [];
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
          ticketsArray.push(tickets);
        }
      }),
    );
    return ticketsArray;
  }
}
