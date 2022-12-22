import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quest, QuestDocument } from './schemas/quest.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestService {
  constructor(
    @InjectModel(Quest.name) private questModel: Model<QuestDocument>,
  ) {}

  async save(quest: Quest): Promise<Quest> {
    const createdQuest = new this.questModel(quest);
    return createdQuest.save();
  }

  async findById(id: string): Promise<Quest> {
    const foundQuest = this.questModel.findById(id);
    return foundQuest.exec();
  }
}
