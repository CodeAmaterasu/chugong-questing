import { Controller, Get } from '@nestjs/common';
import { QuestlineService } from '../questline/questline.service';
import { Types } from 'mongoose';
import { AcceptedQuestlineService } from './accepted-questline.service';
import { AcceptedQuestline } from './schemas/accepted-questline.schema';
import { UserService } from '../user/user.service';

@Controller('/test/accepted-questline')
export class AcceptedQuestlineController {
  constructor(
    private questlineService: QuestlineService,
    private acceptedQuestlineService: AcceptedQuestlineService,
    private userService: UserService,
  ) {}
  @Get()
  getHello(): any {
    const acc = new AcceptedQuestline();

    return this.questlineService
      .findById('63a4450202167e58963f35f8')
      .then((data) => {
        acc.questline = data;
        return this.userService
          .findById('63a43afa268b007089b88fdc')
          .then((data) => {
            acc.user = data;
            return this.acceptedQuestlineService.save(acc).then((data) => {
              return data;
            });
          });
      });
  }
}
