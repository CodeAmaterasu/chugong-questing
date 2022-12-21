import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  userLvl: number;
  @Column()
  strengthLvl: number;
  @Column()
  intelligenceLvl: number;
  @Column()
  enduranceLvl: number;
  @Column()
  charismaLvl: number;
  @Column()
  vitalityLvl: number;
  @Column()
  dexterity: number;
}
