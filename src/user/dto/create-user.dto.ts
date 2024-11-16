import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Password must be more then 6 symbols' })
  password: string;

  first_name: string;
  last_name: string;
  surname_name: string;
  date_birthday: string;
  role: string;
}
