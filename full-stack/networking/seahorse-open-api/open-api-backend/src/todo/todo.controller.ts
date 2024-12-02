import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoRequest } from './dto/create-todo-request.dto';
import { UpdateTodoRequest } from './dto/update-todo-request.dto';
import { CreateTodoResponse } from './dto/create-todo-response.dto';
import { GetAllTodosResponse } from './dto/get-all-todos-response.dto';
import { UpdateTodoResponse } from './dto/update-todo-response.dto';
import { DeleteTodoResponse } from './dto/delete-todo-response.dto';

@Controller('todos')
@ApiTags('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
	
  @Post()
	@HttpCode(201)
	@ApiBody({ type: CreateTodoRequest, description: 'The necessary data to create a new todo' })
	@ApiResponse({ status: 201, type: CreateTodoResponse, description: 'Todo successfully created' })
  async create(@Body() createTodoRequest: CreateTodoRequest): Promise<CreateTodoResponse> {
    const newTodo = await this.todoService.create(createTodoRequest.name);
		return new CreateTodoResponse(newTodo.id, newTodo.name);
  }

  @Get()
	@ApiResponse({ status: 200, type: GetAllTodosResponse, description: 'List with every todo' })
  async findAll(): Promise<GetAllTodosResponse> {
    const foundTodos = await this.todoService.findAll();
		return new GetAllTodosResponse(foundTodos);
  }

  @Patch(':id')
	@ApiBody({ type: UpdateTodoRequest, description: 'The necessary data to update a todo' })
	@ApiResponse({ status: 200, type: UpdateTodoResponse, description: 'Todo successfully updated' })
	@ApiResponse({ status: 404, description: 'Todo to update not found' })
  async update(@Param('id') id: string, @Body() updateTodoData: UpdateTodoRequest): Promise<UpdateTodoResponse> {
    const updatedTodo = await this.todoService.update(id, updateTodoData.name);

		if(!updatedTodo) throw new NotFoundException(`Todo to update not found`);

		return new UpdateTodoResponse(updatedTodo.id, updatedTodo.name);
  }

  @Delete(':id')
	@ApiResponse({ status: 200, type: DeleteTodoResponse, description: 'Todo successfully deleted' })
	@ApiResponse({ status: 404, description: 'Todo to delete not found' })	
  async remove(@Param('id') id: string): Promise<DeleteTodoResponse> {
    const taskWasDeleted = await this.todoService.delete(id);

		if (!taskWasDeleted) throw new NotFoundException(`Todo to delete not found`);

		return new DeleteTodoResponse();
  }
}