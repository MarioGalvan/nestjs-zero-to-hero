import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { CarModel } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {
  private cars:CarModel[] = [
    {
      id: uuid(),
      marca: 'Ford',
      model:2021
    },
    {
      id: uuid(),
      marca: 'Chevy',
      model:2020
    },
    {
      id: uuid(),
      marca: 'Toyota',
      model:2019
    },
    {
      id: uuid(),
      marca: 'Honda',
      model:2018
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  addNewCar(data:any) {
   return data;
  }
}
