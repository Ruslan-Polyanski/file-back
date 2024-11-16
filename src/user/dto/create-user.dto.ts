import { UsePipes, ValidationPipe } from '@nestjs/common';
import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @UsePipes(new ValidationPipe())
  email: string;

  @MinLength(6, { message: 'Password must be more then 6 simbols' })
  password: string;
}
