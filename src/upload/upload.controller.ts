import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

  @Post('pdf')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: new UploadService().getStorageConfig()
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.handleFileUpload(file);
  }
}
