/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getAllUsers(): Promise<{
    users: {
      id: number;
      photo: string;
      fullName: string;
      profession: { id: number; title: string };
    }[];
  }> {
    const data = await this.userService.getAllUsers();
    const newData = data.map((user) => {
      delete user.password;
      delete user.email;
      const { first_name, last_name, surname_name, ...rest } = user;
      return {
        ...rest,
        fullName: `${first_name} ${last_name} ${surname_name}`,
      };
    });
    return { users: newData };
  }

  @Post('user')
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
