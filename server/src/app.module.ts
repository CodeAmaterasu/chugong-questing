import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { QuestModule } from './quest/quest.module';
import { QuestlineModule } from './questline/questline.module';
import { AcceptedQuestlineModule } from './accepted-questline/accepted-questline.module';
import { AcceptedQuestModule } from './accepted-quest/accepted-quest.module';
import { LoggerModule } from './logger/logger.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UserModule,
    QuestModule,
    QuestlineModule,
    AcceptedQuestlineModule,
    AcceptedQuestModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
