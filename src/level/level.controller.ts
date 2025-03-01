import { Controller, Get, UseGuards } from '@nestjs/common';
import { LevelService } from './level.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('levels')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @UseGuards(JwtAuthGuard)
  @Get('supervisors')
  async getAllLevels(): Promise<{
    supervisors: { id: number; fullName: string }[];
  }> {
    const data = await this.levelService.getAllLevels();
    const newData = data.filter((level) => level.id === 1)[0].users;
    const newDataNormalize = newData.reduce((acc, user) => {
      const { id, first_name, last_name, surname_name } = user;
      const newData = {
        id,
        fullName: `${first_name} ${last_name} ${surname_name}`,
      };
      return [...acc, newData];
    }, []);
    return { supervisors: newDataNormalize };
  }
}
