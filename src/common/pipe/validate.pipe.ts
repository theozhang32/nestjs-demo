/*
 * @Author: 张天昊
 * @Date: 2023-07-24 11:08:53
 * @LastEditTime: 2023-07-24 11:20:31
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /nestjs-demo/src/common/pipe/validate.pipe.ts
 */

import {
  ArgumentMetadata,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class ValidatePipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || this.noNeedValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    console.log(object)
    const errors = await validate(object);
    console.log(errors)
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private noNeedValidate(metatype: Function) {
    // TypeScript 中的 interface 在转译期间会消失。因此，如果方法参数的类型被声明为接口(interface)而不是类(class)，则 metatype 将是 Object
    const types: Function[] = [String, Number, Boolean, Array, Object];
    return types.includes(metatype);
  }
}
