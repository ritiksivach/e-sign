import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkflowModule } from './workflow/workflow.module';
import { UploadModule } from './upload/upload.module';
import { ESignTagsModule } from './e-sign-tags/e-sign-tags.module';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './api-key.guard';

@Module({
  imports: [WorkflowModule, UploadModule, ESignTagsModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    }
  ],
})
export class AppModule {}
