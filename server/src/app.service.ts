import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
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
}
