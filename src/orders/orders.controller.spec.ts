import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TicketsService } from '../tickets/tickets.service';
import { OfferService } from '../offer/offer.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('OrdersController', () => {
  let controller: OrdersController;
  let mockJwtService: Partial<JwtService>;

  const mockConfigService: Partial<ConfigService> = {
    get: jest.fn(),
  };

  const mockOrderRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByUser: jest.fn(),
  };

  let mockTicketsService: Partial<TicketsService>;
  let mockOfferService: Partial<OfferService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        OrdersService,
        { provide: 'ORDER_REPOSITORY', useValue: mockOrderRepository },
        { provide: TicketsService, useValue: mockTicketsService },
        { provide: OfferService, useValue: mockOfferService },
        { provide: JwtService, useValue: mockJwtService as JwtService },
        {
          provide: ConfigService,
          useValue: mockConfigService as ConfigService,
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
