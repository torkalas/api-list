import {
  Body,
  Controller, Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post, Put,
} from '@nestjs/common'

import { TodoService } from './todo.service'
import Todos from './todo.entity'
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { ApiBody, ApiTags } from '@nestjs/swagger'

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  getAllById(@Param('id') id: string): Promise<Todos[]> {
    return this.todoService.allById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  @ApiBody({ type: CreateTodoDto })
  create(@Body() data: CreateTodoDto): Promise<InsertResult> {
    return this.todoService.create(data)
  }

  @Put(':id')
  @ApiBody({ type: UpdateTodoDto })
  update(
    @Body() data: UpdateTodoDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return this.todoService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.todoService.remove(id)
  }
}
