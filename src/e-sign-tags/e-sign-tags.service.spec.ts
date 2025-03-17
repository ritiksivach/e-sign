import { Test, TestingModule } from '@nestjs/testing';
import { ESignTagsService } from './e-sign-tags.service';

describe('ESignTagsService', () => {
  let service: ESignTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ESignTagsService],
    }).compile();

    service = module.get<ESignTagsService>(ESignTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
