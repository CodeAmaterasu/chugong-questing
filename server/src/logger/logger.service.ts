import { Injectable, LoggerService, LogLevel, Scope } from '@nestjs/common';
import * as winston from 'winston';
import * as process from 'process';

@Injectable({ scope: Scope.TRANSIENT })
export class Logger implements LoggerService {
  private logger = winston.createLogger({
    level: process.env.LOGGING_LEVEL,
    format: winston.format.combine(
      winston.format((info) => {
        info.level = info.level.toUpperCase();
        return info;
      })(),
      winston.format.timestamp({ format: 'dd.MM.YYYY HH:mm:SS.sss' }),
      winston.format.printf(
        ({ level, message, timestamp }) =>
          `${timestamp} [${level}]: ${message}`,
      ),
    ),
    transports: this.getTransports(),
  });
  getTransports(): any {
    if (process.env.NODE_ENV === 'prod') {
      return [
        new winston.transports.Console({ level: process.env.LOGGING_LEVEL }),
        new winston.transports.File({
          filename: process.env.LOGGING_PATH,
          level: process.env.LOGGING_LEVEL,
          format: winston.format.combine(
            winston.format((info) => {
              info.level = info.level.toUpperCase();
              return info;
            })(),
            winston.format.timestamp({ format: 'dd.MM.YYYY HH:mm:SS.sss' }),
            winston.format.printf(
              ({ level, message, timestamp }) =>
                `${timestamp} [${level}]: ${message}`,
            ),
          ),
        }),
      ];
    } else {
      return [
        new winston.transports.Console({ level: process.env.LOGGING_LEVEL }),
      ];
    }
  }
  log(message: any) {
    this.logger.info(message);
  }

  debug(message: any) {
    this.logger.debug(message);
  }

  setLogLevels(levels: LogLevel[]): any {
    return {};
  }

  verbose(message: any) {
    this.logger.verbose(message);
  }

  warn(message: any) {
    this.logger.warn(message);
  }

  error(message: any) {
    this.logger.error(message);
  }
}
