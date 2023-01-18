import { ApiProperty } from '@nestjs/swagger';
import { ICustomer } from '../entities/customer.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto implements ICustomer {
  @ApiProperty()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty()
  @IsNotEmpty()
  contactName: string;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;
}
