import { Module } from '@nestjs/common';
import { FilmService } from '../services/film.service';
import { FilmsController } from '../controllers/film.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import FilmesEntity from '../models/entities/filmes.entity';
import FilmConverter from '../models/converters/film.converter';

@Module({
  imports: [TypeOrmModule.forFeature([FilmesEntity])],
  controllers: [FilmsController],
  providers: [FilmService, FilmConverter],
})
export class FilmModule {}
