import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGreeting(): string {
    return 'Welcome to The Change Companies® Media API';
  }
}
