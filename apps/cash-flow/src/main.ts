import { NestFactory } from '@nestjs/core';
import { CashFlowModule } from './cash-flow.module';

async function bootstrap() {
  const app = await NestFactory.create(CashFlowModule);
  await app.listen(3000);
}
bootstrap();
