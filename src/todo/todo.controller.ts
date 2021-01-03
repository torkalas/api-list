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
import { UpdateListDto } from '../list/dto/update-list.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

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
  create(@Body() data: CreateTodoDto): Promise<InsertResult> {
    return this.todoService.create(data)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.todoService.remove(id)
  }

  @Put(':id')
  update(
    @Body() data: UpdateTodoDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return this.todoService.update(id, data)
  }
}
