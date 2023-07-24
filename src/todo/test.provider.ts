import { Inject, Injectable } from '@nestjs/common';

/*
 * @Author: 张天昊
 * @Date: 2023-07-19 10:51:30
 * @LastEditTime: 2023-07-19 11:32:21
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /nestjs-demo/src/todo/test.provider.ts
 */
@Injectable()
export class TestProvider {
  constructor(@Inject('CONNECTION') private connection: any) {}

  show() {
    return this.connection();
  }
}
