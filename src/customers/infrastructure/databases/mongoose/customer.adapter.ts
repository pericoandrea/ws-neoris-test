import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomerRepository } from 'src/customers/domain/customer.repository';
import { Customer, CustomerDocument } from './customer.schema';
import { CreateCustomerDto } from '../../../domain/dto/create-customer.dto';
import { UpdateCustomerDto } from '../../../domain/dto/update-customer.dto';

@Injectable()
export class CustomerAdapter implements ICustomerRepository {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto);
  }

  async remove(id: string): Promise<boolean> {
    const deleted = await this.customerModel.deleteOne({ _id: id }).exec();
    return deleted.deletedCount === 0 ? false : true;
  }
}
