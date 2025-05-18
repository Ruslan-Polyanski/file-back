import { Injectable } from '@nestjs/common';
import { ProfessionEntity } from './profession.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessionService {
    constructor(
      @InjectRepository(ProfessionEntity)
      private readonly professionEntity: Repository<ProfessionEntity>,
    ) {}

  getAllProfession() {
    return this.professionEntity.find()
  }
}
