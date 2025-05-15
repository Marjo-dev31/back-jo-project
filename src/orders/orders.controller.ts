import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { cartItemDto } from './dto/cartItem.dto';
import { TicketsService } from '../tickets/tickets.service';
import { OfferService } from '../offer/offer.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly ticketService: TicketsService,
    private readonly offerService: OfferService,
  ) {}

  @UseGuards(AuthGuard)
  @Post(':id')
  async create(@Param('id') userId: string, @Body() cart: cartItemDto[]) {
    const newOrder = await this.ordersService.create(cart, userId);
    // const updateOffer =
    await this.offerService.updateNumberOfSales(cart);
    // const newTickets =
    this.ticketService.create(cart, newOrder.id);
    return newOrder;
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('user/:id')
  findByUser(@Param('id') userId: string) {
    return this.ordersService.findByUser(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ordersService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ordersService.remove(id);
  // }
}
