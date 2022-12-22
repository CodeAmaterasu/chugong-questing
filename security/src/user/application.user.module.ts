import { Module } from '@nestjs/common';
import { ApplicationUserService } from './application.user.service';
import { ApplicationUserController } from './application.user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ApplicationUser, ApplicationUserSchema } from './schemas/application.user.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '7d' },
    }),
    MongooseModule.forFeature([
      {
        name: ApplicationUser.name,
        schema: ApplicationUserSchema,
      },
    ]),
  ],
  controllers: [ApplicationUserController],
  providers: [ApplicationUserService],
})
export class ApplicationUserModule {}
