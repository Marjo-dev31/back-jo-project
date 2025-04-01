import { Inject, Injectable } from '@nestjs/common';
import { CreateSportingEventDto } from './dto/create-sporting-event.dto';
import { UpdateSportingEventDto } from './dto/update-sporting-event.dto';
import { SportingEventEntity } from './entities/sporting-event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportingEventService {
  constructor(
    @Inject('SPORTING_EVENT_REPOSITORY')
    private sportingEventRepository: Repository<SportingEventEntity>,
  ) {}

  async create(createSportingEventDto: CreateSportingEventDto) {
    const newSportingEvent = this.sportingEventRepository.create(
      createSportingEventDto,
    );
    return await this.sportingEventRepository.save(newSportingEvent);
  }

  async findAll() {
    return await this.sportingEventRepository.find();
  }

  findOne(id: string) {
    return this.sportingEventRepository.findOne({ where: { id } });
  }

  async update(id: string, updateSportingEventDto: UpdateSportingEventDto) {
    return await this.sportingEventRepository.update(
      { id },
      {
        title: updateSportingEventDto.title,
        description: updateSportingEventDto.description,
        imgUrl: updateSportingEventDto.imgUrl,
      },
    );
  }

  async remove(id: string) {
    return await this.sportingEventRepository.delete({ id });
  }
}
