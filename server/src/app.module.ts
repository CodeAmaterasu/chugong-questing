import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './data/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: 'root',
      database: 'chugong',
      entities: [User],
      synchronize: true,
      authSource: 'admin',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
