import { ApiProperty } from '@nestjs/swagger';

export default class UsersInput {
  @ApiProperty()
  id?: number;

  //@ApiProperty()
  //films?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  active: boolean;
}
