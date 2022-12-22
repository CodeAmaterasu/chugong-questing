import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, SchemaTypes } from 'mongoose';

export type QuestDocument = HydratedDocument<Quest>;

@Schema()
export class Quest {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  image: string;
  @Prop([SchemaTypes.Map])
  reward: Map<string, number>;
  @Prop()
  published: boolean;
  @Prop([SchemaTypes.ObjectId])
  applicationUserId: Types.ObjectId;
}

export const QuestSchema = SchemaFactory.createForClass(Quest);
