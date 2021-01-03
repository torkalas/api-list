import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm'

import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import Lists from './list.entity'

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(Lists)
    private readonly listRepository: Repository<Lists>,
  ) {}

  async all(): Promise<Lists[]> {
    return this.listRepository.find()
  }

  async one(id: string): Promise<Lists> {
    return this.listRepository.findOne(id)
  }

  async create(data: CreateListDto): Promise<InsertResult> {
    return this.listRepository.insert(data)
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.listRepository.delete(id)
  }

  async update(id: string, data: UpdateListDto): Promise<UpdateResult> {
    return this.listRepository.update(id, data)
  }
}
