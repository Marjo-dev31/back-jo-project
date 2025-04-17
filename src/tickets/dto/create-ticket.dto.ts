import { UpdateOfferDto } from "src/offer/dto/update-offer.dto";
import { UpdateOrderDto } from "src/orders/dto/update-order.dto";
import { UpdateSportingEventDto } from "src/sporting-event/dto/update-sporting-event.dto";

export class CreateTicketDto {
  order: UpdateOrderDto;
  offer: UpdateOfferDto;
  sportingEvent: UpdateSportingEventDto;
  ticketKey: string;
}