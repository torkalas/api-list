import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm'

import Todos from './todo.entity'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todos)
    private readonly todoRepository: Repository<Todos>,
  ) {}

  async allById(id: string): Promise<Todos[]> {
    return this.todoRepository.find({ listId: parseInt(id) })
  }

  async create(data: CreateTodoDto): Promise<InsertResult> {
    return this.todoRepository.insert(data)
  }

  async update(id: string, data: UpdateTodoDto): Promise<UpdateResult> {
    return this.todoRepository.update(id, data)
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.todoRepository.delete(id)
  }
}
