import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportingEventModule } from './sporting-event/sporting-event.module';
import { OfferModule } from './offer/offer.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { TicketsModule } from './tickets/tickets.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { CustomConfigModule } from 'src/helpers/custom-config.module';

@Module({
  imports: [
    SportingEventModule,
    OfferModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    OrdersModule,
    TicketsModule,
    MailerModule.forRoot({
      transport: {
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '1c5b17705a4792',
          pass: '16519151a44161',
        },
      },
    }),
    CustomConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
