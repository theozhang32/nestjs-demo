/*
 * @Author: 张天昊
 * @Date: 2023-07-24 11:04:01
 * @LastEditTime: 2023-07-24 11:07:21
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /nestjs-demo/src/common/decorator/user.decorator.ts
 */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user && user[data] : user;
  },
);
