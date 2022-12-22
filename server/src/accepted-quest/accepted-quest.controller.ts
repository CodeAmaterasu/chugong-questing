import { Controller, Get } from '@nestjs/common';
import { QuestService } from '../quest/quest.service';
import { AcceptedQuestService } from './accepted-quest.service';
import { AcceptedQuest } from './schemas/accepted-quest.schema';
import { UserService } from '../user/user.service';

@Controller('/test/accepted-quest')
export class AcceptedQuestController {
  constructor(
    private questService: QuestService,
    private acceptedQuestService: AcceptedQuestService,
    private userService: UserService,
  ) {}
  @Get()
  getHello(): any {
    const acc = new AcceptedQuest();
    return this.questService
      .findById('63a43fa78c9dadc6eb1d76a3')
      .then((data) => {
        acc.quest = data;
        return this.userService
          .findById('63a43afa268b007089b88fdc')
          .then((data) => {
            acc.user = data;
            return this.acceptedQuestService.save(acc).then((data) => {
              return data;
            });
          });
      });
  }
}
