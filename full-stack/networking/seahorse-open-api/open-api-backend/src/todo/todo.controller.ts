import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoRequest } from './dto/create-todo-request.dto';
import { UpdateTodoRequest } from './dto/update-todo-request.dto';

@Controller('todo')
@ApiTags('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
	@ApiBody({ type: CreateTodoRequest, description: 'The necessary data to create a new todo' })
	@ApiResponse({ status: 201, type: Todo, description: 'Todo successfully created' })
  create(@Body() newBook: CreateTodoRequest): Promise<Todo> {
    return this.todoService.create(newBook);
  }

  @Get()
	@ApiResponse({ status: 200, type: Todo, isArray: true, description: 'List with every todo' })
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
	@ApiResponse({ status: 200, type: Todo, description: 'Get todo by ID' })
	@ApiResponse({ status: 404, description: 'Todo not found' })
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
	@ApiBody({ type: UpdateTodoRequest, description: 'The necessary data to update a todo' })
	@ApiResponse({ status: 200, type: Todo, description: 'Todo successfully updated' })
	@ApiResponse({ status: 404, description: 'Todo to update not found' })
  update(@Param('id') id: string, @Body() updateTodoData: UpdateTodoRequest): Promise<Todo> {
    return this.todoService.update(id, updateTodoData);
  }

  @Delete(':id')
	@ApiResponse({ status: 200, type: Boolean, description: 'Todo successfully deleted' })
	@ApiResponse({ status: 404, description: 'Todo to delete not found' })	
  remove(@Param('id') id: string): Promise<boolean> {
    return this.todoService.delete(id);
  }
}
