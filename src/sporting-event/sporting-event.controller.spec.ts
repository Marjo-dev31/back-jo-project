import { Test, TestingModule } from '@nestjs/testing';
import { SportingEventController } from './sporting-event.controller';
import { SportingEventService } from './sporting-event.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

describe('SportingEventController', () => {
  let controller: SportingEventController;
  let mockConfigService: Partial<ConfigService>;
  let mockJwtService: Partial<JwtService>;

  const mockSportingEventRepo = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportingEventController],
      providers: [
        SportingEventService,
        {
          provide: 'SPORTING_EVENT_REPOSITORY',
          useValue: mockSportingEventRepo,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService as ConfigService,
        },
        { provide: JwtService, useValue: mockJwtService as JwtService },
      ],
    }).compile();

    controller = module.get<SportingEventController>(SportingEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
