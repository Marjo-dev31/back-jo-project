import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginUserDto } from '../user/dto/login-user.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { MailService } from '../user/mail/mail.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailService: MailService,
  ) {}

  @Post('login')
  login(@Body() loginUserDto: loginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    this.mailService.sendMail(createUserDto);
    return this.authService.signup(createUserDto);
  }
}
