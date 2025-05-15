import { UpdateUserDto } from "src/user/dto/update-user.dto";

export class CreateOrderDto {
  total: number;
  createAt?: Date;
  user: UpdateUserDto
}
