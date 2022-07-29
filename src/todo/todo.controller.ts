import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Post()
  add(@Body() todo) {
    return this.todoService.add(todo);
  }
}
