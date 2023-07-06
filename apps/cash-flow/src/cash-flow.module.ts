import { Module } from '@nestjs/common';
import { CashFlowController } from './cash-flow.controller';
import { CashFlowService } from './cash-flow.service';

@Module({
  imports: [],
  controllers: [CashFlowController],
  providers: [CashFlowService],
})
export class CashFlowModule {}
