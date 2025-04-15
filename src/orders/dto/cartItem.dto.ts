export class cartItemDto {
  id?: string;
  offerId: string;
  offer: string;
  sportingEventId: string;
  sportingEvent: string;
  price: number;
  quantity: number;
  total: number;
}

export class cartDto {
  cart: cartItemDto[]
}
