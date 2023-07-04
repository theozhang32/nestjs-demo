import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dogs.dto';
import { UpdateDogDto } from './dto/update-dogs.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return `This action adds a new dog: ${JSON.stringify(createDogDto)}`;
  }
  // create(@Body() createDogDto: CreateDogDto) {
  //   return this.dogsService.create(createDogDto);
  // }

  @Get()
  findAll() {
    // return 'This action returns all dogs';
    throw new HttpException(
      {
        code: 1,
        msg: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }
  // async findAll() {
  //   return this.dogsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} dog`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog: ${JSON.stringify(updateDogDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} dog`;
  }
}
