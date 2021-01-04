import { ApiProperty } from '@nestjs/swagger'

export class CreateListDto {
  @ApiProperty()
  readonly name: string
}
