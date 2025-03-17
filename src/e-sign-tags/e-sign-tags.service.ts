import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ESignTagsService {

    private readonly apiUrl = 'https://sandbox.opensignlabs.com/api/v1/createtemplate';
    //private readonly apiToken = 'test.4HTJ7uxSZqvdZZan37DF3o';
    async createTemplate(templateData: any): Promise<any> {
        try {
            const response = await axios.post(
                this.apiUrl,
                templateData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': `Bearer ${this.apiToken}`,
                    },
                },
            );
            return response.data;
        } catch (error) {
            throw new HttpException(
                error.response?.data || 'An error occurred while creating the template',
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
