import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import Lists from '../list/list.entity'

@Entity()
class Todos {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  listId: number

  @Column()
  text: string

  @Column({ default: false })
  completed: boolean

  @Column()
  created_at: number

  @ManyToOne(() => Lists, (list: Lists) => list.todos, {
    cascade: true,
    eager: false, // auto add relations
  })
  @JoinColumn()
  list: Lists
}

export default Todos
