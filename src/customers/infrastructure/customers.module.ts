import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomersController } from './customers.controller';
import { CustomersService } from '../application/customers.service';
import { Customer, CustomerSchema } from './databases/mongoose/customer.schema';
import { ICustomerRepositoryToken } from '../domain/customer.repository';
import { CustomerAdapter } from './databases/mongoose/customer.adapter';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    {
      provide: ICustomerRepositoryToken,
      useClass: CustomerAdapter,
    },
  ],
})
export class CustomersModule {}

/*
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => ({
        uri: `mongodb+srv://${configService.DB.USERNAME}:${configService.DB.PASSWORD}@${configService.DB.HOSTNAME}/${configService.DB.SERVICENAME}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [config.KEY],
    }),
    MongooseModule.forFeature([
      {
        name: LogOtp.name,
        schema: LogOtpSchema,
      },
    ]),
*/
