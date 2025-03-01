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
        dateTag: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
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
    
    const dataUser = {
      breakTime: employeeData.breakDate,
      company: employeeData.companyValue,
      dateTag: employeeData.dataTag,
      startTime: employeeData.startDate,
      endTime: employeeData.endDate,
      equipment: employeeData.equipmentValue,
      fullName: employeeData.fullName,
      profession: employeeData.profession,
      supervisor: employeeData.supervisorValue,
      user_id: +employeeData.id,
    }

    const userToday = await this.dateRepository.findOne({
      where: {
        dateTag: employeeData.dataTag,
        user_id: +employeeData.id
      },
    });

    if(userToday) {
      await this.dateRepository.update(userToday.id, dataUser)
      const updateUserToday = await this.dateRepository.findOne({
        where: {
          dateTag: employeeData.dataTag,
          user_id: +employeeData.id
        },
      });
      return updateUserToday;
    }
    
    return await this.dateRepository.save(dataUser);
  }
}


