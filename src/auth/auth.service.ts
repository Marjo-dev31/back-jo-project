import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { loginUserDto } from 'src/user/dto/login-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginUser: loginUserDto) {
    const user = await this.userService.findOneByEmail(loginUser.email);
    if (user?.password !== loginUser.password) {
      throw new UnauthorizedException();
    }

    return { access_token: await this.createJwt(user), user };
  }

  async createJwt(user: UserEntity) {
    const payload = { id: user.id, email: user.email };
    return await this.jwtService.signAsync(payload);
  }

  async signup(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return { access_token: await this.createJwt(user), user };
  }
}
