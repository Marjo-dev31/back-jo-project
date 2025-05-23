import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from './auth.guard';
import { MailService } from 'src/user/mail/mail.service';
import { CustomConfigModule } from 'src/helpers/custom-config.module';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [CustomConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('secret_token'),
        signOptions: {
          expiresIn: '3h',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, MailService],
})
export class AuthModule {}
