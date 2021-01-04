import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import Lists from '../list/list.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
class Todos {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  listId: number

  @ApiProperty()
  @Column()
  text: string

  @ApiProperty()
  @Column({ default: false })
  completed: boolean

  @ApiProperty()
  @Column()
  created_at: number

  @ManyToOne(() => Lists, (list: Lists) => list.todos, {
    cascade: true,
    eager: false, // auto add relations
  })
  list: Lists
}

export default Todos
