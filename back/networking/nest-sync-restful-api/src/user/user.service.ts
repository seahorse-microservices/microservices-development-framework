import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserResponse } from './create-user-response.dto';

@Injectable()
export class UserService {
  findOne(arg0: number): Promise<CreateUserResponse> {
    return new Promise<CreateUserResponse>();
  }
  create(createUserRequest: CreateUserRequest): any {
    throw new Error('Method not implemented.');
  }
}
