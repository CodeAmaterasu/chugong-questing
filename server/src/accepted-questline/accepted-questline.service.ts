import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AcceptedQuestline,
  AcceptedQuestlineDocument,
} from './schemas/accepted-questline.schema';
import { Model } from 'mongoose';

@Injectable()
export class AcceptedQuestlineService {
  constructor(
    @InjectModel(AcceptedQuestline.name)
    private acceptedQuestlineModel: Model<AcceptedQuestlineDocument>,
  ) {}

  async save(questline: AcceptedQuestline): Promise<AcceptedQuestline> {
    const createdAcceptedQuestline = new this.acceptedQuestlineModel(questline);
    return createdAcceptedQuestline.save();
  }

  async findById(id: string): Promise<AcceptedQuestline> {
    const foundAcceptedQuestline = this.acceptedQuestlineModel.findById(id);
    return foundAcceptedQuestline.exec();
  }
}
