import { IsString } from 'class-validator';

export class CreateSportingEventDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imgUrl: string;
}
