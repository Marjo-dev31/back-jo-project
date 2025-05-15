import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let userService: Partial<UserService>;
  let mockJwtService: Partial<JwtService>;

  // const mockUser: UserEntity = {
  //   id: '1',
  //   firstname: 'John',
  //   lastname: 'Doe',
  //   username: 'JohnDoe',
  //   email: 'test@example.com',
  //   password: 'mockPassword',
  //   isAdmin: false,
  //   privateKey: '',
  //   orders: [],
  // };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: userService as UserService },
        { provide: JwtService, useValue: mockJwtService as JwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
