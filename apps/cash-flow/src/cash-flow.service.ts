import { Injectable } from '@nestjs/common';

@Injectable()
export class CashFlowService {
  getHello(): string {
    return 'Hello World!';
  }
}
