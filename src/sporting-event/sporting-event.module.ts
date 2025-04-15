import { Module } from '@nestjs/common';
import { SportingEventService } from './sporting-event.service';
import { SportingEventController } from './sporting-event.controller';
import { DatabaseModule } from 'src/database/database.module';
import { sportingEventProviders } from './sporting-event.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [SportingEventController],
  providers: [...sportingEventProviders, SportingEventService, JwtService],
})
export class SportingEventModule {}
