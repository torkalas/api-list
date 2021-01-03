import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Todos from '../todo/todo.entity'

@Entity()
class Lists {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  created_at: number

  @OneToMany(() => Todos, (todo: Todos) => todo.list, {
    eager: true, // auto add relations
  })
  todos: Todos[]
}

export default Lists
