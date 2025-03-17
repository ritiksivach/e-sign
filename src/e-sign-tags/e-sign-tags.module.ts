import { Module } from '@nestjs/common';
import { ESignTagsController } from './e-sign-tags.controller';
import { ESignTagsService } from './e-sign-tags.service';

@Module({
  controllers: [ESignTagsController],
  providers: [ESignTagsService]
})
export class ESignTagsModule {}
