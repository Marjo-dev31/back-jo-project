import { Test, TestingModule } from '@nestjs/testing';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('TicketsController', () => {
  let controller: TicketsController;

  let mockTicketsService: Partial<TicketsService>;

  let mockJwtService: Partial<JwtService>;

  const mockConfigService: Partial<ConfigService> = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketsController],
      providers: [
        { provide: TicketsService, useValue: mockTicketsService },
        { provide: JwtService, useValue: mockJwtService as JwtService },
        {
          provide: ConfigService,
          useValue: mockConfigService as ConfigService,
        },
      ],
    }).compile();

    controller = module.get<TicketsController>(TicketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
