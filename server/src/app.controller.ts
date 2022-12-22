import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './data/User';
import { Logger } from './logger/logger.service';
import { HttpExceptionFilter } from './filter/http-exception.filter';

@Controller()
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private logger: Logger,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log(`DB Name: ${process.env.DATABASE_NAME}`);
    const user = new User();
    user.email = 'danilo.murer@edu.tbz.ch';
    user.name = 'Danilo Murer';
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
    //throw new HttpException(
    //  { status: HttpStatus.INTERNAL_SERVER_ERROR, error: 'error' },
    //  HttpStatus.INTERNAL_SERVER_ERROR,
    //  { cause: new Error('test') },
    //);
    return this.appService.getHello();
  }
}
