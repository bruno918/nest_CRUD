import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import FilmEntity from '../models/entities/filmes.entity';
import { InjectRepository } from '@nestjs/typeorm';

import FilmOutput from '../models/dto/output/film.output';
import FilmConverter from '../models/converters/film.converter';
import FilmInput from '../models/dto/input/film.input';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(FilmEntity)
    private readonly filmRepo: Repository<FilmEntity>,
    private readonly filmConverter: FilmConverter,
  ) {}

  async findAll(): Promise<FilmOutput[]> {
    const filmEntities = await this.filmRepo.find();

    const outputList = filmEntities.map((entity) => {
      return this.filmConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: FilmInput) {
    const entity = new FilmEntity();

    const convertedEntity = this.filmConverter.inputToEntity(input, entity);

    const savedEntity = await this.filmRepo.save(convertedEntity);

    const output = this.filmConverter.entityToOutput(savedEntity);

    return output;
  }

  async update(id: number, input: FilmInput): Promise<FilmOutput> {
    const filmEntity = await this.filmRepo.findOne({ where: { id: id } });

    const convertedEntity = this.filmConverter.inputToEntity(input, filmEntity);

    const savedEntity = await this.filmRepo.save(convertedEntity);

    const output = this.filmConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const filmEntity = await this.filmRepo.findOne({ where: { id: id } });

    const output = this.filmConverter.entityToOutput(filmEntity);

    return output;
  }

  async updateTitle(id: number, title: string) {
    const filmEntity = await this.filmRepo.findOne({ where: { id } });

    filmEntity.title = title;

    const filmSaved = await this.filmRepo.save(filmEntity);

    const output = this.filmConverter.entityToOutput(filmSaved);

    return output;
  }

  remove(id: number) {
    const remove = this.filmRepo.delete(id);
  }
}
