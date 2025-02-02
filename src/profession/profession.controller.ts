// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ProfessionService } from './profession.service';

@Controller()
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}
  @Get('professions')
  async getAllProfession() {
    return this.professionService.getAllProfession();
  }
}
