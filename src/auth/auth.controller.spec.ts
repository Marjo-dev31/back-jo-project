import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { UserModule } from 'src/user/user.module';
// import { UserService } from 'src/user/user.service';

// describe('AuthController', () => {
//   let controller: AuthController;
//   let mockAuthService: AuthService;
//   let mockUserService: UserService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [UserModule],
//       providers: [
//         { provide: AuthService, useValue: mockAuthService },
//         { provide: UserService, useValue: mockUserService },
//       ],
//       controllers: [AuthController],
//     }).compile();

//     controller = module.get<AuthController>(AuthController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { loginUserDto } from 'src/user/dto/login-user.dto';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let userService: UserService;

  const mockAuthService = {
    login: jest.fn(),
    signup: jest.fn(),
  };

  const mockUserService = {
    findOneyEmail: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: UserService, useValue: mockUserService },
      ],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
    authService = moduleRef.get<AuthService>(AuthService);
    userService = moduleRef.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('should call authService.login with correct data and return result', async () => {
    const dto: loginUserDto = {
      email: 'test@example.com',
      password: 'test123',
    };

    const result = {
      access_token: 'mock-token',
      user: {
        id: '1',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        isAdmin: false,
        privateKey: '',
        orders: [],
      },
    };

    jest.spyOn(authService, 'login').mockResolvedValue(result);

    expect(await authController.login(dto)).toBe(result);
    expect(authService.login).toHaveBeenCalledWith(dto);
  });

  it('should call authService.signup with correct data and return result', async () => {
    const dto: CreateUserDto = {
      firstname: 'John',
      lastname: 'Doe',
      username: 'Doe',
      email: 'john@example.com',
      password: 'securePass123',
    };

    const result = {
      access_token: 'mock-token',
      user: {
        id: '1',
        isAdmin: false,
        privateKey: '',
        orders: [],
        ...dto,
      },
    };

    jest.spyOn(authService, 'signup').mockResolvedValue(result);

    expect(await authController.signup(dto)).toBe(result);
    expect(authService.signup).toHaveBeenCalledWith(dto);
  });
});
