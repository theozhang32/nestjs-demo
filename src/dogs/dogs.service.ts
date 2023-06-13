import { Inject, Injectable, Optional } from '@nestjs/common';
import { Dog } from './interface/dog.interface';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];
  // constructor(private readonly dogs: Dog[]) {}

  create(dog: Dog) {
    return this.dogs.push(dog);
  }

  findAll() {
    return this.dogs;
  }
}
