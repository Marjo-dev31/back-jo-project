import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}

  sendMail(createUserDto: CreateUserDto) {
    const message = `Bonjour ${createUserDto.firstname}, vous venez de vous inscrire sur le site de la billeterie officielle des Jeux Olympiques. Cet email vous est envoyé pour vérifier votre adresse mail.`;

    this.mailService.sendMail({
      from: 'mailtrap@demomailtrap.com',
      to: 'marjory.bravo.dev@gmail.com',
      subject: `Confirmez votre Email`,
      text: message,
    });
  }
}
