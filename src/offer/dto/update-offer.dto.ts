import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';
import { IsString } from 'class-validator';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @IsString()
  id: string;
}
