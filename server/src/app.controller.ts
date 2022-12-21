import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './data/User';
import { Quest } from './data/Quest';
import {Questline} from "./data/Questline";
import {QuestlineDto} from "./data/dto/QuestlineDto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    const quest = new Quest();
    quest.name = 'Test-Quest';
    quest.description = 'Test-Description';
    quest.image = 'kafdjaöslkfjadsölfkjdslaöfjkldsaö';
    const rewardMap = new Map();
    rewardMap.set('strength', 10).set('endurance', 20);
    quest.reward = rewardMap;
    quest.published = false;
    // this.appService.saveQuest(quest).then((data) => {
    //   console.log(data);
    // });
    // this.appService.getQuest('Test-Quest').then((data) => {
    //   const questline = new Questline();
    //   questline.name = 'Test-Questline';
    //   questline.description = 'Test-Description';
    //   questline.published = false;
    //   questline.reward = rewardMap;
    //   questline.image = 'dadfkaslfjdsaölfjdskslöfjklöasfjdklö';
    //   questline.quests = [data.id];
    //
    //   this.appService.saveQuestline(questline).then((data) => {
    //     console.log(data);
    //   });
    // });
    return this.appService.getQuestline('Test-Questline').then((data) => {
      return data;
    });
  }
}
