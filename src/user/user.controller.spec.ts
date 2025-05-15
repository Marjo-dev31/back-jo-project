import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('UserController', () => {
  let controller: UserController;

  const mockUserRepository = {};

  let mockJwtService: Partial<JwtService>;

  const mockConfigService: Partial<ConfigService> = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],

      providers: [
        UserService,
        { provide: 'USER_REPOSITORY', useValue: mockUserRepository },
        { provide: JwtService, useValue: mockJwtService as JwtService },
        {
          provide: ConfigService,
          useValue: mockConfigService as ConfigService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
