import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '../logger/logger.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}
  catch(exception: HttpException, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    if (status >= 400 && status < 500) {
      this.logger.warn(`Http [${status}, ${request.method}] Error: ${exception.message}. ${request.url}`);
    } else if (status >= 500) {
      this.logger.error(`Http [${status}, ${request.method}] Error: ${exception.message}. ${request.url}`);
    } else {
      this.logger.log(`Http [${status}, ${request.method}] Error: ${exception.message}. ${request.url}`);
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      body: request.body,
      params: request.params,
      query: request.query,
    });
  }
}
