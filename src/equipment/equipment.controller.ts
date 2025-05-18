import { Controller, Get, UseGuards } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentEntity } from './equipment.entity';
import { JwtAccessAuthGuard } from 'src/auth/guards/jwt-access-auth.guard';

@Controller()
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @UseGuards(JwtAccessAuthGuard)
  @Get('equipments')
  async getAllEquipment(): Promise<{ equipments: EquipmentEntity[] }> {
    const data = await this.equipmentService.getAllEquipment();
    return { equipments: data };
  }
}
