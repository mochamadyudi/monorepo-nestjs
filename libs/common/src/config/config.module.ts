import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule,ConfigService} from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [NestConfigModule.forRoot({
    validationSchema: Joi.object({
      MONGOOSE: Joi.string().required(),
      XENDIT_API_URL: Joi.string().required(),
      XENDIT_API_SECRET_KEY:  Joi.string().required(),
      XENDIT_API_PUBLIC_KEY: Joi.string().required(),
      XENDIT_API_CALLBACK_KEY: Joi.string().required()
    })
  })]
})
export class ConfigModule {}
