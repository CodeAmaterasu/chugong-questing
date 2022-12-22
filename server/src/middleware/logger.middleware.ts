import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '../logger/logger.service';

/**
 * Middleware to log incoming requests using the {@link Logger}
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: Logger) {}
  use(req: Request, res: Response, next: (error?: NextFunction) => void): any {
    this.logger.log(
      `Request Incoming: [${req.method}] ${req.url}. Body: {${JSON.stringify(
        req.body,
      )}}.`,
    );
    next();
  }
}
