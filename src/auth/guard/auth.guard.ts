import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

/*
 * @Author: 张天昊
 * @Date: 2023-07-21 17:56:25
 * @LastEditTime: 2023-07-24 10:02:57
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /nestjs-demo/src/auth/guard/auth.guard.ts
 */
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    return validateRequest(request);
  }
}

function validateRequest(req: Request) {
  console.log(req)
  return false;
}
