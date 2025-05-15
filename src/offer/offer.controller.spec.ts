import { Test, TestingModule } from '@nestjs/testing';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('OfferController', () => {
  let offerController: OfferController;
  let mockJwtService: Partial<JwtService>;

  const mockConfigService: Partial<ConfigService> = {
    get: jest.fn(),
  };

  const mockOfferRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    updateNumberOfSales: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferController],
      providers: [
        OfferService,
        { provide: 'OFFER_REPOSITORY', useValue: mockOfferRepository },
        { provide: JwtService, useValue: mockJwtService as JwtService },
        {
          provide: ConfigService,
          useValue: mockConfigService as ConfigService,
        },
      ],
    }).compile();

    offerController = module.get<OfferController>(OfferController);
  });

  it('should be defined', () => {
    expect(offerController).toBeDefined();
  });
});
