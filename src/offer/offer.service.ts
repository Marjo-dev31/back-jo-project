import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OfferService {
  offers: Offer[] = [
    {
      id: '1',
      title: 'solo',
      description:
        "L'offre est valable pour une personne pour l'épreuve sélectionnée",
      price: 100,
      numberOfSales: 10,
      imgUrl: '/olympia-68773_1280.jpg',
    },
    {
      id: '2',
      title: 'duo',
      description:
        "L'offre duo est valable pour une entrée pour 2 personnes pour l'épreuve sélectionnée",
      price: 175,
      numberOfSales: 3,
      imgUrl: '/olympia-68773_1280.jpg',
    },
    {
      id: '3',
      title: 'famille',
      description:
        "L'offre famille est valable pour une entrée pour 4 personnes pour l'épreuve sélectionnée",
      price: 300,
      numberOfSales: 12,
      imgUrl: '/olympia-68773_1280.jpg',
    },
  ];
  create(createOfferDto: CreateOfferDto) {
    return `This action adds a new offer : ${createOfferDto.title}`;
  }

  findAll() {
    return this.offers;
  }

  findOne(id: number) {
    return `This action returns a #${id} offer`;
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
