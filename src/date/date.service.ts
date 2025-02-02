import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DateEntity } from './date.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class DateService {
  constructor(
    @InjectRepository(DateEntity)
    private readonly dateRepository: Repository<DateEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllDate(): Promise<any> {
    const users = await this.userRepository.find({
      relations: {
        profession: true,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        surname_name: true,
        photo: true,
      },
    });
    const usersToday = await this.dateRepository.find({
      where: {
        dateTag: '16.0.2025',
      },
      select: {
        user_id: true,
        fullName: true,
        profession: true,
        startTime: true,
        endTime: true,
        breakTime: true,
        company: true,
        equipment: true,
        supervisor: true,
        dateTag: true,
      },
    });

    return {
      users,
      usersToday,
    };
  }

  async createDate(employeeData) {
    const usersToday = await this.dateRepository.find({
      where: {
        dateTag: employeeData.dateTag,
      },
    });
    return usersToday;
    // return await this.dateRepository.save();
  }
}

// {
//   dateTag: '16.0.2025',
//   user_id: 3,
//   fullName: 'Лиза	Фронтова	Петрович',
//   profession: 'Сварщик',
//   startTime: '1736838000000',
//   endTime: '1736866800000',
//   breakTime: '1736895600000',
//   company: 'Гомсельмаш',
//   equipment: 'ИФДС5419',
//   supervisor: 'Татьяна	Лебедева	Петрович',
// }
