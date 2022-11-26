import { ApiProperty } from '@nestjs/swagger';

export default class UsersOutput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  //@ApiProperty()
  //films?: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
