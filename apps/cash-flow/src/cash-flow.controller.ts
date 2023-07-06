import { Controller, Get } from '@nestjs/common';
import { CashFlowService } from './cash-flow.service';

@Controller()
export class CashFlowController {
  constructor(private readonly cashFlowService: CashFlowService) {}

  @Get()
  getHello(): string {
    return this.cashFlowService.getHello();
  }
}
