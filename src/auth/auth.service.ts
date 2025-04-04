import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { loginUserDto } from 'src/user/dto/login-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  saltOrRounds: number = 10;

  async login(loginUser: loginUserDto) {
    const user = await this.userService.findOneByEmail(loginUser.email);
    const isMatch = await bcrypt.compare(loginUser.password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Email ou mot de passe invalide');
    }
    return { access_token: await this.createJwt(user), user };
  }

  async createJwt(user: UserEntity) {
    const payload = { id: user.id, email: user.email };
    return await this.jwtService.signAsync(payload);
  }

  async signup(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(
      createUserDto.password,
      this.saltOrRounds,
    );
    const data = { ...createUserDto, password: hashPassword };
    const user = await this.userService.create(data);
    return { access_token: await this.createJwt(user), user };
  }
}
