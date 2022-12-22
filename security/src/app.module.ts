import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApplicationUserModule } from './user/application.user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    ApplicationUserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
