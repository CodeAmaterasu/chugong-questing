import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AcceptedQuestlineSchema,
  AcceptedQuestline,
} from './schemas/accepted-questline.schema';
import { AcceptedQuestlineController } from './accepted-questline.controller';
import { AcceptedQuestlineService } from './accepted-questline.service';
import { QuestlineModule } from '../questline/questline.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QuestlineModule,
    UserModule,
    MongooseModule.forFeature([
      {
        name: AcceptedQuestline.name,
        schema: AcceptedQuestlineSchema,
      },
    ]),
  ],
  controllers: [AcceptedQuestlineController],
  providers: [AcceptedQuestlineService],
})
export class AcceptedQuestlineModule {}
