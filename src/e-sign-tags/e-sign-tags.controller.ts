import { Body, Controller, Get, Post } from '@nestjs/common';
import { ESignTagsService } from './e-sign-tags.service';

@Controller('e-sign-tags')
export class ESignTagsController {

    constructor(private readonly eSignTagsService: ESignTagsService) {}


    @Get('url')
    getSiteUrl(): string {
        return 'https://app.opensignlabs.com/debugpdf';
    }


    @Post('create-template')
    async createTemplate(@Body() templateData: any): Promise<any> {
        return this.eSignTagsService.createTemplate(templateData);
    }
}