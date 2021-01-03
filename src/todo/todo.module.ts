import { Module } from '@nestjs/common'
import { TodoService } from './todo.service'
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import Todos from './todo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
