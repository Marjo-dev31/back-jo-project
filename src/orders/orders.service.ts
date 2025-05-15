import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { cartItemDto } from './dto/cartItem.dto';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<OrderEntity>,
  ) {}

  async create(cart: cartItemDto[], userId: string) {
    const total = cart.reduce((acc, cur) => acc + cur.total, 0);
    const order: CreateOrderDto = {
      total: total,
      user: { id: userId },
    };
    const newOrder = this.orderRepository.create(order);
    return await this.orderRepository.save(newOrder);
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  findByUser(id: string) {
    return this.orderRepository.find({
      relations: { user: true },
      where: { user: { id: id } },
    });
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: string, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} order`;
  // }
}
