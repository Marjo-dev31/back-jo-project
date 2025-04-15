import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SportingEventService } from './sporting-event.service';
import { CreateSportingEventDto } from './dto/create-sporting-event.dto';
import { UpdateSportingEventDto } from './dto/update-sporting-event.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { IsAdminGuard } from 'src/user/isAdmin.guard';

@Controller('sporting-event')
export class SportingEventController {
  constructor(private readonly sportingEventService: SportingEventService) {}

  @UseGuards(AuthGuard, IsAdminGuard)
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
    return this.sportingEventService.findOne(id);
  }

  @UseGuards(AuthGuard, IsAdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportingEventDto: UpdateSportingEventDto,
  ) {
    return this.sportingEventService.update(id, updateSportingEventDto);
  }

  @UseGuards(AuthGuard, IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportingEventService.remove(id);
  }

  @UseGuards(AuthGuard, IsAdminGuard)
  @Post('/upload')
  createImg(@Body() formData: FormData) {
    // upload file in a service or middleware
    return formData;
  }
}
