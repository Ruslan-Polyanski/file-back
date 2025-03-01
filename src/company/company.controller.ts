import { Controller, Get, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyEntity } from './company.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(JwtAuthGuard)
  @Get('companies')
  async getAllCompany(): Promise<{ companies: CompanyEntity[] }> {
    const data = await this.companyService.getAllCompany();
    return { companies: data };
  }
}
