import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { Types } from 'mongoose';

@Controller('/test')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getHello(): any {
    const user = new User();
    user.charismaLvl = 0;
    user.dexterityLvl = 0;
    user.enduranceLvl = 0;
    user.intelligenceLvl = 0;
    user.strengthLvl = 0;
    user.userLvl = 0;
    user.vitalityLvl = 0;
    user.applicationUserId = new Types.ObjectId('63a41e4cc6988871d062b98c');

    /*this.userService.save(user).then((data) => {
      console.log(data);
    });*/
    /*return this.userService
      .findById('63a43afa268b007089b88fdc')
      .then((data) => {
        return data;
      });*/
  }
}
