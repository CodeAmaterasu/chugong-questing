import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult } from 'typeorm';
import { User } from './data/User';
import { Logger } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource, private logger: Logger) {}
  getHello(): string {
    return 'Hello World!';
  }
  saveUser(user: User): Promise<User> {
    this.logger.log(`Saving User: ${JSON.stringify(user)}`);
    return this.dataSource.getMongoRepository(User).save(user);
  }

  getUser(name: string): Promise<User> {
    this.logger.log(`Getting User: ${name}`);
    return this.dataSource.getMongoRepository(User).findOneBy({
      name: name,
    });
  }

  deleteUser(user: User): Promise<DeleteResult> {
    this.logger.log(`Deleting User: ${JSON.stringify(user)}`);
    return this.dataSource.getMongoRepository(User).delete(user);
  }

  // updateUser(user: User): Promise<User> {
  //   return this.dataSource.getMongoRepository(User).update();
  // }
}
