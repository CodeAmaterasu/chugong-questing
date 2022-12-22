import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, SchemaTypes } from 'mongoose';
import { Questline } from '../../questline/schemas/questline.schema';
import { User } from '../../user/schemas/user.schema';

export type AcceptedQuestlineDocument = HydratedDocument<AcceptedQuestline>;

@Schema()
export class AcceptedQuestline {
  @Prop({ type: Types.ObjectId, ref: 'Questline' })
  questline: Questline;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;
}

export const AcceptedQuestlineSchema =
  SchemaFactory.createForClass(AcceptedQuestline);
