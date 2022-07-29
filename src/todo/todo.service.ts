import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  todos = [
    {
      title: 'hoge',
      description: 'fuga',
    },
  ];

  findAll() {
    return this.todos;
  }

  add(todo): void {
    this.todos.push(todo);
  }
}
