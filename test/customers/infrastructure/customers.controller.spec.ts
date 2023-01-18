import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { CustomersService } from '../../../src/customers/application/customers.service';
import { CustomersController } from '../../../src/customers/infrastructure/customers.controller';

jest.mock('../../../src/customers/application/customers.service');

describe('CustomersController', () => {
  let app: INestApplication;
  let controller: CustomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);

    app = module.createNestApplication();
    await app.init();
  });

  describe('Rest endpoints', () => {
    it('Initialize - Success', async () => {
      expect(app).toBeDefined();
    });

    it('controller should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('/customers (POST)', () => {
      return request(app.getHttpServer()).post('/customers').expect(201);
    });

    it('/customers (GET)', () => {
      return request(app.getHttpServer()).get('/customers').expect(200);
    });

    it('/customers/:id (GET)', () => {
      return request(app.getHttpServer()).get('/customers/3c738aa').expect(200);
    });

    it('/customers (PUT)', () => {
      return request(app.getHttpServer()).put('/customers/dedf2e0').expect(200);
    });
    it('/customers (DELETE)', () => {
      return request(app.getHttpServer()).delete('/customers/6c7a').expect(200);
    });
  });
});
