import { Controller, Get } from '@nestjs/common';
import { QuestlineService } from './questline.service';
import { Questline } from './schemas/questline.schema';
import { Types } from 'mongoose';
import { QuestService } from '../quest/quest.service';

@Controller('/test/questline')
export class QuestlineController {
  constructor(
    private questlineService: QuestlineService,
    private questService: QuestService,
  ) {}
  @Get()
  getHello(): any {
    const questline = new Questline();
    questline.name = 'Name';
    questline.applicationUserId = new Types.ObjectId(
      '63a41e4cc6988871d062b98c',
    );
    questline.description = 'Description';
    questline.image = 'fdakslöjfaöejiraoöjgfaödklfjdasfdew';
    questline.published = false;
    const rewards = new Map<string, number>();
    rewards.set('strength', 10);
    rewards.set('endurance', 10);
    questline.reward = rewards;
    return this.questService
      .findById('63a43fa78c9dadc6eb1d76a3')
      .then((data) => {
        questline.quests = Array.of(data);
        return this.questlineService.save(questline).then((data) => {
          return data;
        });
      });
  }
}
