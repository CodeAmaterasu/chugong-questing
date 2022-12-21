import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './data/User';
import { ConfigModule } from '@nestjs/config';
import {Quest} from "./data/Quest";
import {Questline} from "./data/Questline";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Quest, Questline],
      synchronize: true,
      authSource: 'admin',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
