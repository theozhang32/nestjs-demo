import { DynamicModule, Module } from '@nestjs/common';
import { connection } from './func';

/*
 * @Author: 张天昊
 * @Date: 2023-07-19 11:38:37
 * @LastEditTime: 2023-07-19 11:51:23
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /nestjs-demo/src/database.module.ts
 */
@Module({
  providers: [
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class DatabaseModule {
  static forRoot(index: number): DynamicModule {
    const countFactory = {
      provide: 'COUNT',
      useFactory: () => index,
    };
    return {
      module: DatabaseModule,
      providers: [countFactory],
      exports: ['COUNT'],
    };
  }
}
