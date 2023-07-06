import { Test, TestingModule } from '@nestjs/testing';
import { CashFlowController } from './cash-flow.controller';
import { CashFlowService } from './cash-flow.service';

describe('CashFlowController', () => {
  let cashFlowController: CashFlowController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CashFlowController],
      providers: [CashFlowService],
    }).compile();

    cashFlowController = app.get<CashFlowController>(CashFlowController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cashFlowController.getHello()).toBe('Hello World!');
    });
  });
});
