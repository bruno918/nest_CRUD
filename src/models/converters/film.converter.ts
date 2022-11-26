import { Injectable } from '@nestjs/common';

import FilmesEntity from '../entities/filmes.entity';
import FilmsOutput from '../dto/output/film.output';
import FilmsInput from '../dto/input/film.input';

@Injectable()
export default class FilmsConverter {
  inputToEntity(input: FilmsInput, entity: FilmesEntity) {
    entity.id = input.id;
    //   entity.user = input.userid;
    entity.title = input.title;
    entity.image = input.image;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: FilmesEntity): FilmsOutput {
    const output = new FilmsOutput();
    output.id = entity.id;
    //  output.userid = entity.user;
    output.title = entity.title;
    output.image = entity.image;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
