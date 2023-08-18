import { Controller, Get, Post, Body } from '@nestjs/common';
import { Types } from 'mongoose';
import { QuestService } from './quest.service';
import { Quest } from './schemas/quest.schema';
import {QuestDto as QuestDto} from './dto/questDto';
import {Reward} from "./dto/reward";

@Controller('/api/quest')
export class QuestController {
  constructor(private questService: QuestService) {}
  @Get()
  getAll(): any {
    // const quest = new Quest();
    // quest.applicationUserId = new Types.ObjectId('63a43afa268b007089b88fdc');
    // quest.image = 'dksöalfdjkaösdfjkaödsf';
    // quest.description = 'Description';
    // quest.name = 'Name';
    // quest.published = false;
    // const rewards = new Map<string, number>();
    // rewards.set('strength', 10);
    // rewards.set('endurance', 10);
    // quest.reward = rewards;
    //
    // return this.questService.save(quest).then((data) => {
    //   return data;
    // });
  }

  @Post()
  create(@Body() createDto: QuestDto) {
    // const quest = new QuestDto();
    // quest.applicationUserId = '63a43afa268b007089b88fdc';
    // quest.image = 'dksöalfdjkaösdfjkaödsf';
    // quest.description = 'Description';
    // quest.name = 'Name';
    // quest.published = false;
    // const rewards = new Map<string, number>();
    // rewards.set('strength', 10);
    // rewards.set('endurance', 10);
    // quest.reward = rewards;
    //
    // return quest;
  }

  @Get('/te')
  getTest(): QuestDto {
    const quest = new QuestDto();
    quest.applicationUserId = '63a43afa268b007089b88fdc';
    quest.image = 'dksöalfdjkaösdfjkaödsf';
    quest.description = 'Description';
    quest.name = 'Name';
    quest.published = false;

    quest.reward = [new Reward('strength', 10), new Reward('endurance', 10)];

    return quest;
  }

}
