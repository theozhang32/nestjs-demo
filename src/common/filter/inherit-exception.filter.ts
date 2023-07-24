/*
 * @Author: 张天昊
 * @Date: 2023-07-21 17:32:25
 * @LastEditTime: 2023-07-21 17:32:26
 * @LastEditors: 张天昊
 * @Description: 
 * @FilePath: /nestjs-demo/src/common/filter/inherit-exception.filter.ts
 */
import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class InheritExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}