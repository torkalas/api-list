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
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery, ApiResponse,
  ApiTags,
} from '@nestjs/swagger'

import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import Lists from './list.entity'
import { ListService } from './list.service'

/**
 * List controller
 */
@ApiTags('list')
@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  /**
   * Get all Lists
   */
  @Get()
  @ApiOkResponse({
    description: 'Retrieved all lists successfully',
    type: [Lists],
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  getAll(): Promise<Lists[]> {
    return this.listService.all()
  }

  /**
   * Get one List
   */
  @Get(':id')
  @ApiQuery({
    name: 'id',
    type: 'string',
    description: 'Unique identifier',
  })
  @ApiOkResponse({
    description: 'Retrieved list by ID successfully',
    type: Lists,
  })
  @ApiNotFoundResponse({ description: 'No list found for ID' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  getOne(@Param('id') id: string): Promise<Lists> {
    return this.listService.one(id)
  }

  /**
   * Create List
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  @ApiBody({ type: CreateListDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created list successfully',
    type: InsertResult,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() data: CreateListDto): Promise<InsertResult> {
    return this.listService.create(data)
  }

  /**
   * Update List
   */
  @Put(':id')
  @ApiQuery({
    name: 'id',
    type: 'string',
    description: 'Unique identifier',
  })
  @ApiBody({ type: UpdateListDto })
  @ApiOkResponse({
    description: 'Updated list by ID successfully',
    type: UpdateResult,
  })
  @ApiNotFoundResponse({ description: 'No list found for ID' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  update(
    @Body() updateProductDto: UpdateListDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return this.listService.update(id, updateProductDto)
  }

  /**
   * Delete List
   */
  @Delete(':id')
  @ApiQuery({
    name: 'id',
    type: 'string',
    description: 'Unique identifier',
  })
  @ApiOkResponse({
    description: 'Delete list by ID successfully',
    type: DeleteResult,
  })
  @ApiNotFoundResponse({ description: 'No list found for ID' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.listService.remove(id)
  }
}
