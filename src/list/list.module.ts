import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ListController } from './list.controller'
import { ListService } from './list.service'
import Lists from './list.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Lists])],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
