import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { FilmService } from '../services/film.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import FilmsOutput from '../models/dto/output/film.output';
import FilmsInput from '../models/dto/input/film.input';

@ApiTags('Films')
@Controller('film')
export class FilmsController {
  constructor(private readonly filmsService: FilmService) {}

  @Get()
  @ApiCreatedResponse({ type: FilmsOutput, isArray: true })
  findAll(): Promise<FilmsOutput[]> {
    return this.filmsService.findAll();
  }

  @Post()
  save(@Body() input: FilmsInput) {
    return this.filmsService.save(input);
  }

  @Put(':id')
  @ApiCreatedResponse({ type: FilmsOutput })
  update(
    @Param('id') id: string,
    @Body() input: FilmsInput,
  ): Promise<FilmsOutput> {
    return this.filmsService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: FilmsOutput })
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FilmsOutput })
  updateTitle(@Param('id') id: string, @Query('title') title: string) {
    return this.filmsService.updateTitle(+id, title);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
