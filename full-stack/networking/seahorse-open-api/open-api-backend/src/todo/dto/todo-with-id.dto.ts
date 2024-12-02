import { ApiProperty } from "@nestjs/swagger"

export class TodoWithId {
	@ApiProperty()
	id: string

	@ApiProperty()
	name: string
};