import { PartialType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create-dogs.dto';

export class UpdateDogDto extends PartialType(CreateDogDto) {}
