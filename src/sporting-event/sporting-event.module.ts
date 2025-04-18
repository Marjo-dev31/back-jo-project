import { Module } from '@nestjs/common';
import { SportingEventService } from './sporting-event.service';
import { SportingEventController } from './sporting-event.controller';
import { DatabaseModule } from 'src/database/database.module';
import { sportingEventProviders } from './sporting-event.providers';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [DatabaseModule, MulterModule.register({ dest: './uploads' })],
  controllers: [SportingEventController],
  providers: [...sportingEventProviders, SportingEventService, JwtService],
})
export class SportingEventModule {}
