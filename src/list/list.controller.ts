import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm'

import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import Lists from './list.entity'
import { ListService } from './list.service'

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getAll(): Promise<Lists[]> {
    return this.listService.all()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Lists> {
    return this.listService.one(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() data: CreateListDto): Promise<InsertResult> {
    return this.listService.create(data)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.listService.remove(id)
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateListDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return this.listService.update(id, updateProductDto)
  }
}
