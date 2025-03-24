import { PartialType } from '@nestjs/mapped-types';
import { CreateSportingEventDto } from './create-sporting-event.dto';

export class UpdateSportingEventDto extends PartialType(
  CreateSportingEventDto,
) {
  id: string;
}
