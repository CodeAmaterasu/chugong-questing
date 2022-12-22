import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, SchemaTypes } from 'mongoose';
import { Quest } from '../../quest/schemas/quest.schema';

export type QuestlineDocument = HydratedDocument<Questline>;

@Schema()
export class Questline {
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
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Quest' }] })
  quests: Quest[];
}

export const QuestlineSchema = SchemaFactory.createForClass(Questline);
