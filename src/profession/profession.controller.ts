import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { JwtAccessAuthGuard } from 'src/auth/guards/jwt-access-auth.guard';

@Controller()
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @UseGuards(JwtAccessAuthGuard)
  @Get('professions')
  async getAllProfession() {
    const professions = await this.professionService.getAllProfession();
    const result = professions.map((profession) => ({
      id: profession.id,
      name: profession.title,
    }));

    return { professions: result };
  }
}
