/*
 * @Author: 张天昊
 * @Date: 2023-07-19 10:19:45
 * @LastEditTime: 2023-07-24 11:07:12
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /nestjs-demo/src/todo/dto/create-todo.dto.ts
 */
import { IsString } from 'class-validator';
export class CreateTodoDto {
  @IsString()
  readonly name: string;
}
