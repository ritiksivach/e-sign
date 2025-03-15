import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkflowModule } from './workflow/workflow.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [WorkflowModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
