import { Injectable } from '@nestjs/common';
import {DataSource, DeleteResult} from 'typeorm';
import { User } from './data/User';
@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}
  getHello(): string {
    return 'Hello World!';
  }
  saveUser(user: User): Promise<User> {
    return this.dataSource.getMongoRepository(User).save(user);
  }

  getUser(name: string): Promise<User> {
    return this.dataSource.getMongoRepository(User).findOneBy({
      name: name,
    });
  }

  deleteUser(user: User): Promise<DeleteResult> {
    return this.dataSource.getMongoRepository(User).delete(user);
  }

  // updateUser(user: User): Promise<User> {
  //   return this.dataSource.getMongoRepository(User).update();
  // }
}
