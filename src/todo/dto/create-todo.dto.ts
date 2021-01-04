import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoDto {
  @ApiProperty()
  readonly listId: number

  @ApiProperty()
  readonly text: string
}
