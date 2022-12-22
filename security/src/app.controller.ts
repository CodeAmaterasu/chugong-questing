import { Controller, Get } from '@nestjs/common';

/**
 * Default API controller
 */
@Controller()
export class AppController {
  /**
   * Default API Endpoint
   */
  @Get()
  getHello(): string {
    return 'Hello World';
  }
}
