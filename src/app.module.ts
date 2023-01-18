import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/infrastructure/customers.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL_MONGO),
    CustomersModule,
  ],
})
export class AppModule {}
