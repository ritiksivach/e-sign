import { Test, TestingModule } from '@nestjs/testing';
import { ESignTagsController } from './e-sign-tags.controller';

describe('ESignTagsController', () => {
  let controller: ESignTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ESignTagsController],
    }).compile();

    controller = module.get<ESignTagsController>(ESignTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
