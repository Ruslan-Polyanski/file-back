// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller()
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @UseGuards(JwtAuthGuard)
  @Get('professions')
  async getAllProfession() {
    return this.professionService.getAllProfession();
  }
}
