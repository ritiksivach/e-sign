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

  fileFilter(req, file, callback) {
  if (file.mimetype !== 'application/pdf') {
    return callback(new BadRequestException('Only PDF files are allowed!'), false);
  }
  callback(null, true);
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
