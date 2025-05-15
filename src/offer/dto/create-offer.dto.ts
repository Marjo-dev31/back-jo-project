import { IsNumber, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  numberOfSales: number;

  @IsString()
  imgUrl: string;
}
