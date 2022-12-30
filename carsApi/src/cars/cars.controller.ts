import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  addCar(@Body() data:CreateCarDto) {
    return this.carsService.addNewCar(data);
  }

  // @Patch(':id')
  // updateCar(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
  //   return this.carsService.findOneById(id);
  // }

  // @Delete(':id')
  // deleteCar(@Param('id', ParseIntPipe) id: number) {
  //   return this.carsService.findOneById(id);
  // }
}
