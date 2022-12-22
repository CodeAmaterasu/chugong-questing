import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Questline, QuestlineDocument } from './schemas/questline.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestlineService {
  constructor(
    @InjectModel(Questline.name)
    private questlineModel: Model<QuestlineDocument>,
  ) {}

  async save(questline: Questline): Promise<Questline> {
    const createdQuestline = new this.questlineModel(questline);
    return createdQuestline.save();
  }

  async findById(id: string): Promise<Questline> {
    const foundQuestline = this.questlineModel.findById(id);
    return foundQuestline.exec();
  }
}
