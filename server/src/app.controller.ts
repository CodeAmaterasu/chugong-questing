import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './data/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const user = new User();
    user.email = 'danilo.murer@edu.tbz.ch';
    user.name = 'Danilo Murer';
    this.appService.saveUser(user).then((data) => {
      console.log(data);
    });
    this.appService.getUser('Danilo Murer').then((data) => {
      console.log(data);
    });
    return this.appService.getHello();
  }
}
