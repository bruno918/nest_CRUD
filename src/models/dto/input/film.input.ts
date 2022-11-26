import { ApiProperty } from '@nestjs/swagger';

export default class FilmsInput {
  @ApiProperty()
  id: number;

  // @ApiProperty()
  //userid?: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;
}
