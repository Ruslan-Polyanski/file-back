import { Body, Controller, Get, Post } from '@nestjs/common';
import { DateService } from './date.service';

@Controller('date')
export class DateController {
  constructor(private readonly dataService: DateService) {}

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
          profession: profession.title,
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
      users: Object.values(newData),
    };
  }

  @Post('today')
  async createDate(@Body() employeeData: string) {
    const data = JSON.parse(employeeData);
    // const response = await this.dataService.createDate(data);
    return JSON.stringify('response');
  }
}
