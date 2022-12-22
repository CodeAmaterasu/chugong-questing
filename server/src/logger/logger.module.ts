import { Module } from '@nestjs/common';
import { Logger } from './logger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
