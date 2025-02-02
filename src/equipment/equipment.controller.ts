import { Controller, Get } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentEntity } from './equipment.entity';

@Controller()
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get('equipments')
  async getAllEquipment(): Promise<{ equipments: EquipmentEntity[] }> {
    const data = await this.equipmentService.getAllEquipment();
    return { equipments: data };
  }
}
