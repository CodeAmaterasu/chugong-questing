import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
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
  getHello(): any {
    return this.appService.getHello();
  }
}
