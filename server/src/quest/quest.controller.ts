import { Controller, Get } from '@nestjs/common';
import { Types } from 'mongoose';
import { QuestService } from './quest.service';
import { Quest } from './schemas/quest.schema';

@Controller('/test/quest')
export class QuestController {
  constructor(private questService: QuestService) {}
  @Get()
  getHello(): any {
    const quest = new Quest();
    quest.applicationUserId = new Types.ObjectId('63a43afa268b007089b88fdc');
    quest.image = 'dksöalfdjkaösdfjkaödsf';
    quest.description = 'Description';
    quest.name = 'Name';
    quest.published = false;
    const rewards = new Map<string, number>();
    rewards.set('strength', 10);
    rewards.set('endurance', 10);
    quest.reward = rewards;

    return this.questService.save(quest).then((data) => {
      return data;
    });
  }
}
