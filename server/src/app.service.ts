import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, ObjectID } from 'typeorm';
import { User } from './data/User';
import { Quest } from './data/Quest';
import {Questline} from "./data/Questline";
import {QuestlineDto} from "./data/dto/QuestlineDto";
@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}
  getHello(): string {
    return 'Hello World!';
  }
  saveUser(user: User): Promise<User> {
    return this.dataSource.getMongoRepository(User).save(user);
  }

  getUser(name: string): Promise<User> {
    return this.dataSource.getMongoRepository(User).findOneBy({
      name: name,
    });
  }

  deleteUser(user: User): Promise<DeleteResult> {
    return this.dataSource.getMongoRepository(User).delete(user);
  }

  saveQuest(quest: Quest): Promise<Quest> {
    return this.dataSource.getMongoRepository(Quest).save(quest);
  }

  getQuest(name: string): Promise<Quest> {
    return this.dataSource.getMongoRepository(Quest).findOneBy({
      name: name,
    });
  }

  getQuestById(id: ObjectID): Promise<Quest> {
    return this.dataSource.getMongoRepository(Quest).findOneBy({ _id: id });
  }

  saveQuestline(questline: Questline): Promise<Questline> {
    return this.dataSource.getMongoRepository(Questline).save(questline);
  }

  async getQuestline(name: string): Promise<QuestlineDto> {
    const questline = this.dataSource
      .getMongoRepository(Questline)
      .findOneBy({ name: name });
    return questline.then(async (data) => {
      const dto = new QuestlineDto();
      dto.name = data.name;
      dto.description = data.description;
      dto.image = data.image;
      dto.id = data.id;
      dto.published = data.published;
      dto.reward = data.reward;
      const quests = [];
      for (const id of data.quests) {
        const quest = await this.getQuestById(id);
        quests.push(quest);
      }
      dto.quests = quests;
      return dto;
    });
  }
}
