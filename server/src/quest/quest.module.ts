import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestSchema, Quest } from './schemas/quest.schema';
import { QuestController } from './quest.controller';
import { QuestService } from './quest.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Quest.name,
        schema: QuestSchema,
      },
    ]),
  ],
  controllers: [QuestController],
  providers: [QuestService],
  exports: [QuestService],
})
export class QuestModule {}
