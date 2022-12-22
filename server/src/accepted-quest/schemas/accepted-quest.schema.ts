import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Quest } from '../../quest/schemas/quest.schema';
import { User } from '../../user/schemas/user.schema';

export type AcceptedQuestDocument = HydratedDocument<AcceptedQuest>;

@Schema()
export class AcceptedQuest {
  @Prop({ type: Types.ObjectId, ref: 'Quest' })
  quest: Quest;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;
}

export const AcceptedQuestSchema = SchemaFactory.createForClass(AcceptedQuest);
