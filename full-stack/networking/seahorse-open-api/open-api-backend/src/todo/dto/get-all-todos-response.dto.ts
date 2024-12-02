import { ApiProperty } from "@nestjs/swagger";
import { TodoWithId } from "./todo-with-id.dto";

export class GetAllTodosResponse {
	@ApiProperty({ type: TodoWithId, isArray: true })
	todosWithId: TodoWithId[];

	constructor(todos: TodoWithId[]) {
		this.todosWithId = todos;
	}
}