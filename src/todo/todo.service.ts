import { Injectable } from '@nestjs/common';
import { Todo } from './interface';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  create(todo: Omit<Todo, 'done'> & { done?: boolean }) {
    if (todo.done === void 0) {
      todo.done = false;
    }
    this.todos.push(todo as Todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }
}
