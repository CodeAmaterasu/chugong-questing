import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestlineSchema, Questline } from './schemas/questline.schema';
import { QuestlineController } from './questline.controller';
import { QuestlineService } from './questline.service';
import { QuestModule } from '../quest/quest.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QuestModule,
    MongooseModule.forFeature([
      {
        name: Questline.name,
        schema: QuestlineSchema,
      },
    ]),
  ],
  controllers: [QuestlineController],
  providers: [QuestlineService],
  exports: [QuestlineService],
})
export class QuestlineModule {}
