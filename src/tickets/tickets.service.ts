import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TicketEntity } from './entities/tickets.entity';
import { cartItemDto } from 'src/orders/dto/cartItem.dto';
import * as bcrypt from 'bcrypt';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @Inject('TICKET_REPOSITORY')
    private ticketRepository: Repository<TicketEntity>,
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
          const ticketKey = await this.generateTicketKey()
          const ticket: CreateTicketDto = {
            offer: {id: element.offerId},
            sportingEvent: {id: element.sportingEventId},
            order: {id: newOrderId},
            ticketKey: ticketKey
          };
          const newTicket = await this.ticketRepository.create(ticket);
          const tickets = await this.ticketRepository.save(newTicket);
          ticketsArray.push(tickets);
        }
      }),
    );
    return ticketsArray;
  }

  async generateTicketKey(){
   const dateTime = new Date()
   const hours =  dateTime.getHours().toString()
   const key = await bcrypt.hash(hours, 10)
   return key
  }
}
