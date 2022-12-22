import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './data/User';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log(`DB Name: ${process.env.DATABASE_NAME}`);
    const user = new User();
    user.email = 'danilo.murer@edu.tbz.ch';
    user.name = 'Danilo Murer';
    console.log(process.env);
    this.appService.saveUser(user).then((data) => {
      this.logger.log(`${JSON.stringify(data)}`);
    });
    // this.appService.getUser('Danilo Murer').then((data) => {
    //   data.name = 'Danilo Jakob';
    //   data.email = 'danilo.jakob@edu.tbz.ch';
    //   this.appService.saveUser(data).then((data) => {
    //     console.log(data);
    //   });
    // });
    return this.appService.getHello();
  }
}
