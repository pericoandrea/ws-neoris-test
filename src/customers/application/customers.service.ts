import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../domain/dto/create-customer.dto';
import { UpdateCustomerDto } from '../domain/dto/update-customer.dto';
import {
  ICustomerRepository,
  ICustomerRepositoryToken,
} from '../domain/customer.repository';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(ICustomerRepositoryToken)
    private customerRepository: ICustomerRepository,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.create(createCustomerDto);
  }

  findAll() {
    return this.customerRepository.findAll();
  }

  async findOne(id: string) {
    const customerFound = await this.customerRepository.findOne(id);

    if (!customerFound) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return customerFound;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customerUpdated = await this.customerRepository.update(
      id,
      updateCustomerDto,
    );
    if (!customerUpdated) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Customer Updated' };
  }

  async remove(id: string) {
    const wasDeleted = await this.customerRepository.remove(id);
    if (!wasDeleted) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Customer Deleted' };
  }
}
