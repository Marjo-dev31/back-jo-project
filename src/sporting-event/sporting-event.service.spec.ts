import { Test, TestingModule } from '@nestjs/testing';
import { SportingEventService } from './sporting-event.service';

describe('SportingEventService', () => {
  let service: SportingEventService;
  const mockSportingEventRepo = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SportingEventService,
        {
          provide: 'SPORTING_EVENT_REPOSITORY',
          useValue: mockSportingEventRepo,
        },
      ],
    }).compile();

    service = module.get<SportingEventService>(SportingEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
