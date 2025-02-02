import { Injectable } from '@nestjs/common';
import { CompanyEntity } from './company.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async getAllCompany(): Promise<CompanyEntity[]> {
    return await this.companyRepository.find();
  }
}
