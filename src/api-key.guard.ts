import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    private readonly apiKey = 'test.4HTJ7uxSZqvdZZan37DF3o';
    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const apiKeyHeader = request.headers['x-api-token'];

        if (!apiKeyHeader || apiKeyHeader !== this.apiKey) {
            throw new UnauthorizedException('Invalid API Key!');
        }
        return true;
    }
}
