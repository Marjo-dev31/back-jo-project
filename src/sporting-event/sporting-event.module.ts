import { Module } from '@nestjs/common';
import { SportingEventService } from './sporting-event.service';
import { SportingEventController } from './sporting-event.controller';

@Module({
  controllers: [SportingEventController],
  providers: [SportingEventService],
})
export class SportingEventModule {}
