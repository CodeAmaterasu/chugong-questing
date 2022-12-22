import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, SchemaTypes } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  userLvl: number;
  @Prop()
  strengthLvl: number;
  @Prop()
  intelligenceLvl: number;
  @Prop()
  enduranceLvl: number;
  @Prop()
  charismaLvl: number;
  @Prop()
  vitalityLvl: number;
  @Prop()
  dexterityLvl: number;
  @Prop([SchemaTypes.ObjectId])
  applicationUserId: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
