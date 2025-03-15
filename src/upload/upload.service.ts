import { BadRequestException, Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';


@Injectable()
export class UploadService {

  getStorageConfig() {
    return diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        callback(null, `${Date.now()} ${file.originalname}`);
      },
    });
  }

  handleFileUpload(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded!');
    }

    return {
      message: 'PDF uploaded successfully',
    };
  }
}
