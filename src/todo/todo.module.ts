import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TestProvider } from './test.provider';
import { connection } from '../func';

@Module({
  controllers: [TodoController],
  providers: [
    TodoService,
    TestProvider,
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class TodoModule {}
