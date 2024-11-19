import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

const GET_USER = 'getUser';


@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
      ) {}
    
      @MessagePattern(GET_USER)
      async handleGetCustomer(@Payload() data: { userId: string }) {
        const { userId } = data;
        return await this.userService.getUser(userId);
      }

}
