import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { DateService } from './date.service';
import { JwtAccessAuthGuard } from 'src/auth/guards/jwt-access-auth.guard';

@Controller('date')
export class DateController {
  constructor(private readonly dataService: DateService) {}

  @UseGuards(JwtAccessAuthGuard)
  @Get('today')
  async getAllDate() {
    const { users, usersToday } = await this.dataService.getAllDate();
    const mapUsers = new Map();
    usersToday.forEach((user) => {
      const { user_id, ...rest } = user;
      mapUsers.set(user_id + '', rest);
    });

    const newData = Object.fromEntries(Array.from(mapUsers));

    users.forEach((user) => {
      if (newData[user.id]) {
        newData[user.id].photo = user.photo;
        newData[user.id].id = user.id;
      } else {
        const { id, first_name, last_name, surname_name, photo, profession } =
          user;

        const newDataUser = {
          id,
          fullName: `${first_name} ${last_name} ${surname_name}`,
          profession: profession?.title,
          startTime: null,
          endTime: null,
          breakTime: null,
          company: null,
          equipment: null,
          supervisor: null,
          dateTag: null,
          photo: photo,
        };
        newData[user.id] = newDataUser;
      }
    });

    return {
      users: Object.values(newData).map((employee) => {
        if (typeof employee === 'object' && 'dateTag' in employee) {
          const place = employee.dateTag ? 'На выезде' : 'В офисе';
          return { ...employee, place };
        }

        return employee;
      }),
    };
  }

  @UseGuards(JwtAccessAuthGuard)
  @Patch('today')
  async createDate(@Body() employeeData) {
    const response = await this.dataService.createDate(employeeData);
    const { user_id, dateTag, ...resp } = response;
    const place = dateTag ? 'На выезде' : 'В офисе';
    return { ...resp, id: user_id, place, dateTag };
  }
}
