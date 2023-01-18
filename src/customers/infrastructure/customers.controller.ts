import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomersService } from '../application/customers.service';
import { CreateCustomerDto } from '../domain/dto/create-customer.dto';
import { UpdateCustomerDto } from '../domain/dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomerIdDto } from '../domain/dto/customer-id.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param() customerId: CustomerIdDto) {
    return this.customersService.findOne(customerId.id);
  }

  @Put(':id')
  update(
    @Param() customerId: CustomerIdDto,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(customerId.id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param() customerId: CustomerIdDto) {
    return this.customersService.remove(customerId.id);
  }
}
