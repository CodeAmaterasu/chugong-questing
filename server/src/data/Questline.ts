import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('questlines')
export class Questline {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  quests: ObjectID[];
  @Column()
  reward: Map<string, number>;
  @Column()
  published: boolean;
}
