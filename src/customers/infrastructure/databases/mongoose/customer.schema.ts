import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ICustomer } from 'src/customers/domain/entities/customer.entity';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer implements ICustomer {
  @Prop()
  companyName: string;

  @Prop()
  contactName: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
