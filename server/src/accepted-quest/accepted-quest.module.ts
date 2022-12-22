import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AcceptedQuestSchema,
  AcceptedQuest,
} from './schemas/accepted-quest.schema';
import { AcceptedQuestController } from './accepted-quest.controller';
import { AcceptedQuestService } from './accepted-quest.service';
import { QuestModule } from '../quest/quest.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QuestModule,
    UserModule,
    MongooseModule.forFeature([
      {
        name: AcceptedQuest.name,
        schema: AcceptedQuestSchema,
      },
    ]),
  ],
  controllers: [AcceptedQuestController],
  providers: [AcceptedQuestService],
})
export class AcceptedQuestModule {}
