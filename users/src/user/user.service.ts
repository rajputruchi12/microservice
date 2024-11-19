import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}

      async getUser(userId:any): Promise<User> {
        const user = await this.userRepository.findOne({
          where: { id: userId },
        });
        return user;
      }

}
