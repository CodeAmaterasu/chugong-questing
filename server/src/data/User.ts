import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
@Entity('user')
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
  @Column()
  email: string;
}
