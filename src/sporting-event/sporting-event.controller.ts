import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SportingEventService } from './sporting-event.service';
import { CreateSportingEventDto } from './dto/create-sporting-event.dto';
import { UpdateSportingEventDto } from './dto/update-sporting-event.dto';

@Controller('sporting-event')
export class SportingEventController {
  constructor(private readonly sportingEventService: SportingEventService) {}

  @Post()
  create(@Body() createSportingEventDto: CreateSportingEventDto) {
    return this.sportingEventService.create(createSportingEventDto);
  }

  @Get()
  findAll() {
    return this.sportingEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportingEventService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportingEventDto: UpdateSportingEventDto,
  ) {
    return this.sportingEventService.update(+id, updateSportingEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportingEventService.remove(+id);
  }

  @Post('/upload')
  createImg(@Body() formData: FormData) {
    // upload file in a service or middleware
    return formData;
  }
}
