import { PartialType } from '@nestjs/mapped-types';
import { CreateSportingEventDto } from './create-sporting-event.dto';
import { IsString } from 'class-validator';

export class UpdateSportingEventDto extends PartialType(
  CreateSportingEventDto,
) {
  @IsString()
  id: string;
}
