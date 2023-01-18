import { Inject, Injectable } from '@nestjs/common';
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

  findOne(id: string) {
    return this.customerRepository.findOne(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.customerRepository.remove(id);
  }
}
