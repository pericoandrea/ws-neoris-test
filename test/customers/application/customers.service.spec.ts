import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from '../../../src/customers/application/customers.service';
import { ICustomerRepositoryToken } from '../../../src/customers/domain/customer.repository';
import { ICustomer } from '../../../src/customers/domain/entities/customer.entity';

jest.mock('../../../src/customers/domain/customer.repository');
describe('CustomersService', () => {
  const customer = { companyName: 'Fake Company Name' } as ICustomer;

  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: ICustomerRepositoryToken,
          useClass: jest.fn().mockImplementation(() => {
            return {
              create: () => customer,
              findAll: () => [customer, customer],
              findOne: () => customer,
              update: () => customer,
              remove: () => true,
            };
          }),
        },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  describe('Tests CustomersService', () => {
    it('service should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should create a customer', () => {
      expect(service.create(customer)).toEqual(customer);
    });

    it('should find all customers', () => {
      expect(service.findAll()).toEqual([customer, customer]);
    });

    it('should find one customer', () => {
      expect(service.findOne('af41c8404')).toEqual(customer);
    });

    it('should find one customer', () => {
      expect(service.update('af41c8404', customer)).toEqual(customer);
    });

    it('should find one customer', () => {
      expect(service.remove('af41c8404')).toEqual(true);
    });
  });
});
