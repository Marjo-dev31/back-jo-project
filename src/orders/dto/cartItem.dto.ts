import { IsNumber, IsString } from 'class-validator';

export class cartItemDto {
  @IsString()
  id?: string;

  @IsString()
  offerId: string;

  @IsString()
  offer: string;

  @IsString()
  sportingEventId: string;

  @IsString()
  sportingEvent: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  total: number;
}
