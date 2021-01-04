import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Todos from '../todo/todo.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
class Lists {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  name: string

  @ApiProperty()
  @Column()
  created_at: number

  @OneToMany(() => Todos, (todo: Todos) => todo.list, {
    eager: true, // auto add relations
  })
  @ApiProperty({ type: [Todos] })
  todos: Todos[]
}

export default Lists
