import { Test, TestingModule } from '@nestjs/testing';
import { SportingEventController } from './sporting-event.controller';
import { SportingEventService } from './sporting-event.service';

describe('SportingEventController', () => {
  let controller: SportingEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportingEventController],
      providers: [SportingEventService],
    }).compile();

    controller = module.get<SportingEventController>(SportingEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
