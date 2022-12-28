import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Ford',
    },
    {
      id: 2,
      brand: 'Chevy',
    },
    {
      id: 3,
      brand: 'Toyota',
    },
    {
      id: 4,
      brand: 'Honda',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  addNewCar(data:any) {
    this.cars.push(data);
  }
}
