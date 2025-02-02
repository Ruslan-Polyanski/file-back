import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentEntity } from './equipment.entity';
import { Repository } from 'typeorm';
// import { CreateEquipmentDto } from './dto/create-equipment.dto';
// import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
  // create(createEquipmentDto: CreateEquipmentDto) {
  //   return 'This action adds a new equipment';
  // }

  constructor(
    @InjectRepository(EquipmentEntity)
    private readonly equipmentRepository: Repository<EquipmentEntity>,
  ) {}

  async getAllEquipment(): Promise<EquipmentEntity[]> {
    return await this.equipmentRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} equipment`;
  // }

  // update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
  //   return `This action updates a #${id} equipment`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} equipment`;
  // }
}
