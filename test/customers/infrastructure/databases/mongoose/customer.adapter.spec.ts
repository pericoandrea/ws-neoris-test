import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAdapter } from '../../../../../src/customers/infrastructure/databases/mongoose/customer.adapter';
import { Customer } from '../../../../../src/customers/infrastructure/databases/mongoose/customer.schema';
import { UpdateCustomerDto } from '../../../../../src/customers/domain/dto/update-customer.dto';

const customerModel = {
  find() {
    return { exec: () => [{}] };
  },
  findById() {
    return { exec: () => ({}) };
  },
  findByIdAndUpdate() {
    return {};
  },
  deleteOne() {
    return { exec: () => ({ deletedCount: 0 }) };
  },
};

describe('CustomerAdapter', () => {
  let service: CustomerAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerAdapter,
        {
          provide: getModelToken(Customer.name),
          useValue: customerModel,
        },
      ],
    }).compile();

    service = module.get<CustomerAdapter>(CustomerAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Customer adapter', () => {
    it('findAll method', async () => {
      expect(service.findAll()).resolves.toEqual([{}]);
    });

    it('findOne method', async () => {
      expect(service.findOne('983af41c')).resolves.toEqual({});
    });

    it('update method', async () => {
      expect(
        service.update('983af41c', new UpdateCustomerDto()),
      ).resolves.toEqual({});
    });

    it('remove method', async () => {
      expect(service.remove('983af41c')).resolves.toEqual(false);
    });
  });
});
