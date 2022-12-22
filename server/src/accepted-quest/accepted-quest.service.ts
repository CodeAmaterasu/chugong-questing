import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AcceptedQuest,
  AcceptedQuestDocument,
} from './schemas/accepted-quest.schema';
import { Model } from 'mongoose';

@Injectable()
export class AcceptedQuestService {
  constructor(
    @InjectModel(AcceptedQuest.name)
    private acceptedQuestModel: Model<AcceptedQuestDocument>,
  ) {}

  async save(acceptedQuest: AcceptedQuest): Promise<AcceptedQuest> {
    const createdAcceptedQuest = new this.acceptedQuestModel(acceptedQuest);
    return createdAcceptedQuest.save();
  }

  async findById(id: string): Promise<AcceptedQuest> {
    const foundAcceptedQuest = this.acceptedQuestModel.findById(id);
    return foundAcceptedQuest.exec();
  }
}
