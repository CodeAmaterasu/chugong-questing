import { ObjectID } from 'typeorm';
import { Quest } from '../Quest';

export class QuestlineDto {
  id: ObjectID;
  name: string;
  description: string;
  image: string;
  quests: Quest[];
  reward: Map<string, number>;
  published: boolean;
}
