import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './data/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(process.env.DATABASE_NAME);
    const user = new User();
    user.email = 'danilo.murer@edu.tbz.ch';
    user.name = 'Danilo Murer';
    // this.appService.saveUser(user).then((data) => {
    //   console.log(data);
    // });
    this.appService.getUser('Danilo Murer').then((data) => {
      data.name = 'Danilo Jakob';
      data.email = 'danilo.jakob@edu.tbz.ch';
      this.appService.saveUser(data).then((data) => {
        console.log(data);
      });
    });
    return this.appService.getHello();
  }
}
