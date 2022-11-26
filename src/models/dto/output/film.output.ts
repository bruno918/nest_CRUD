import { ApiProperty } from '@nestjs/swagger';

export default class FilmsOutput {
  @ApiProperty()
  id: number;

  //@ApiProperty()
  //userid?: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
