import { Controller, Get, UseGuards } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentEntity } from './equipment.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller()
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @UseGuards(JwtAuthGuard)
  @Get('equipments')
  async getAllEquipment(): Promise<{ equipments: EquipmentEntity[] }> {
    const data = await this.equipmentService.getAllEquipment();
    return { equipments: data };
  }
}
