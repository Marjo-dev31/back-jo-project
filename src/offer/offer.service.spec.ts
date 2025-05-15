import { Test, TestingModule } from '@nestjs/testing';
import { OfferService } from './offer.service';

describe('OfferService', () => {
  let service: OfferService;

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
      providers: [
        OfferService,
        { provide: 'OFFER_REPOSITORY', useValue: mockOfferRepository },
      ],
    }).compile();

    service = module.get<OfferService>(OfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
