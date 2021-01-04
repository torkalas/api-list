import { ApiProperty } from '@nestjs/swagger'

export class UpdateTodoDto {
  @ApiProperty()
  readonly text?: string

  @ApiProperty()
  readonly completed?: boolean
}
