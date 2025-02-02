import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyEntity } from './company.entity';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('companies')
  async getAllCompany(): Promise<{ companies: CompanyEntity[] }> {
    const data = await this.companyService.getAllCompany();
    return { companies: data };
  }
}
