import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/sendmail')
  // sendMailer(@Res() response: any) {
  //   const mail = this.appService.sendMail();

  //   return response.status(200).json({
  //     message: 'success',
  //     mail,
  //   });
  // }
}
