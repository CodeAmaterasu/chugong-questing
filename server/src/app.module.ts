import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { QuestModule } from './quest/quest.module';
import { QuestlineModule } from './questline/questline.module';
import { AcceptedQuestlineModule } from './accepted-questline/accepted-questline.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UserModule,
    QuestModule,
    QuestlineModule,
    AcceptedQuestlineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
