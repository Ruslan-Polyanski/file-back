import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessionService {
  async getAllProfession() {
    return 'All profession';
  }
}
