import { Injectable, Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return `Hello World! count`;
  }
}
