import { IsNotEmpty, IsString } from 'class-validator';
import { UpdateOfferDto } from '../../offer/dto/update-offer.dto';
import { UpdateOrderDto } from '../../orders/dto/update-order.dto';
import { UpdateSportingEventDto } from '../../sporting-event/dto/update-sporting-event.dto';

export class CreateTicketDto {
  @IsNotEmpty()
  order: UpdateOrderDto;

  @IsNotEmpty()
  offer: UpdateOfferDto;

  @IsNotEmpty()
  sportingEvent: UpdateSportingEventDto;

  @IsString()
  ticketKey: string;
}
