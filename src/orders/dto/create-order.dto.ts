import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { UpdateUserDto } from '../../user/dto/update-user.dto';

export class CreateOrderDto {
  @IsString()
  total: number;

  @IsDate()
  createAt?: Date;

  @IsNotEmpty()
  user: UpdateUserDto;
}
