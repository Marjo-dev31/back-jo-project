import { Inject, Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Repository } from 'typeorm';
import { OfferEntity } from './entities/offer.entity';
import { cartItemDto } from 'src/orders/dto/cartItem.dto';

@Injectable()
export class OfferService {
  constructor(
    @Inject('OFFER_REPOSITORY')
    private offerRepository: Repository<OfferEntity>,
  ) {}

  async create(createOfferDto: CreateOfferDto) {
    const newOffer = this.offerRepository.create(createOfferDto);
    return await this.offerRepository.save(newOffer);
  }

  async findAll() {
    return await this.offerRepository.find();
  }

  async findOne(id: string) {
    return await this.offerRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateOfferDto: UpdateOfferDto) {
    return await this.offerRepository.update(
      { id },
      {
        title: updateOfferDto.title,
        description: updateOfferDto.description,
        price: updateOfferDto.price,
        imgUrl: updateOfferDto.imgUrl,
      },
    );
  }

  async updateNumberOfSales(cart: cartItemDto[]) {
    const response = await Promise.all(
      cart.map(
        async (cartItem) =>
          await this.offerRepository.increment(
            { id: cartItem.offerId },
            'numberOfSales',
            cartItem.quantity,
          ),
      ),
    );
    return response;
  }

  async remove(id: string) {
    return await this.offerRepository.delete({ id });
  }
}
