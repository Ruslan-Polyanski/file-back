import { Controller, Get, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyEntity } from './company.entity';
import { JwtAccessAuthGuard } from 'src/auth/guards/jwt-access-auth.guard';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(JwtAccessAuthGuard)
  @Get('companies')
  async getAllCompany(): Promise<{ companies: CompanyEntity[] }> {
    const data = await this.companyService.getAllCompany();
    return { companies: data };
  }
}
