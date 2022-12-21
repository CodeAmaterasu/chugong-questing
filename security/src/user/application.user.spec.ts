import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationUserService } from './application.user.service';

describe('UserService', () => {
  let service: ApplicationUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationUserService],
    }).compile();

    service = module.get<ApplicationUserService>(ApplicationUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
