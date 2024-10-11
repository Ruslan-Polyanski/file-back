import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is my first backend server by nest.js';
  }
  getProfile(): string {
    return 'This is my profile :)';
  }
}
