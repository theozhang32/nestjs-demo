import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateTodoDto } from './dto';
import { TodoService } from './todo.service';
import { TestProvider } from './test.provider';
import { HttpExceptionFilter } from '../common/filter';
import { Roles } from '../common/decorator'
import { RolesGuard } from '../auth';
import { ValidatePipe } from '../common/pipe'
// import { of } from 'rxjs';

@Controller('todo')
@UseGuards(RolesGuard)
// @UseFilters(HttpExceptionFilter)
export class TodoController {
  constructor(
    private todoService: TodoService,
    private testProvider: TestProvider,
  ) {}
  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Get('params')
  returnParams(@Req() req: Request) {
    console.log(req);
    return 'This action shows req in console';
  }
  @Post()
  @Roles('admin')
  // @UseFilters(HttpExceptionFilter)
  async create(@Body(new ValidatePipe()) createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
  }
  @Get('connection')
  showConnection() {
    return this.testProvider.show();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return `This action returns a #${id} todo`;
  }

  // @Get()
  // async findAll() {
  //   return of([]);
  // }
  // @Get('ab*cd')
  // findAll() {
  //   return 'This route uses a wildcard';
  // }
}
