import {
  ExecutionContext,
  Injectable,
  CanActivate,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user
    if (!user) {
      throw new BadRequestException('No current user');
    }
    return user.isAdmin;
  }
}
