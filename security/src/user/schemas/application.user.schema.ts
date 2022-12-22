import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<ApplicationUser>;

/**
 * Entity for application-user in the database
 */
@Schema()
export class ApplicationUser {
  @Prop()
  _id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;
}

export const ApplicationUserSchema = SchemaFactory.createForClass(ApplicationUser, );
