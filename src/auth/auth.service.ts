import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { loginUserDto } from '../user/dto/login-user.dto';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginUser: loginUserDto) {
    const user = await this.userService.findOneByEmail(loginUser.email);
    if (!user) {
      throw new NotFoundException('Email ou mot de passe invalide');
    }
    const isMatch = await bcrypt.compare(loginUser.password, user.password);
    if (!isMatch) {
      throw new NotFoundException('Email ou mot de passe invalide');
    }
    return { access_token: await this.createJwt(user), user };
  }

  async createJwt(user: UserEntity) {
    const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin };
    return await this.jwtService.signAsync(payload);
  }

  async signup(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return { access_token: await this.createJwt(user), user };
  }
}
