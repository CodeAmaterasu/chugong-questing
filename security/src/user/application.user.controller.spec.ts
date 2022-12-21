import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationUserController } from './application.user.controller';
import { ApplicationUserService } from './application.user.service';

describe('UserController', () => {
  let controller: ApplicationUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationUserController],
      providers: [ApplicationUserService],
    }).compile();

    controller = module.get<ApplicationUserController>(ApplicationUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
