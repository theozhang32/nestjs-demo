import { Dog } from '../interface/dog.interface';

export class CreateDogDto implements Dog {
  name: string;
  age: number;
  breed: string;
}
