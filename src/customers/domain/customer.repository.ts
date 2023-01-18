import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ICustomer } from './entities/customer.entity';

export const ICustomerRepositoryToken = Symbol('ICustomerRepository');

export abstract class ICustomerRepository {
  abstract create(createCustomerDto: CreateCustomerDto): Promise<ICustomer>;

  abstract findAll(): Promise<ICustomer[]>;

  abstract findOne(id: string): Promise<ICustomer>;

  abstract update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<ICustomer>;

  abstract remove(id: string): Promise<boolean>;
}
