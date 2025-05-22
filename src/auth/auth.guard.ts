import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const { authorization } = request.headers;
      if (!authorization || authorization.trim() === '') {
        throw new UnauthorizedException('Please provide token');
      }

      const authToken = authorization.split(' ')[1];
      const payload = await this.jwtService.verifyAsync(authToken, {
        secret: this.configService.getOrThrow('secret_token'),
      });
      request['user'] = payload;
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
    return true;
  }
}
