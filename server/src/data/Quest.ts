import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('quests')
export class Quest {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  reward: Map<string, number>;
  @Column()
  published: boolean;
  @ObjectIdColumn()
  author: ObjectID;
}
