import { Injectable, Inject } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { CarModel } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: CarModel[] = [];
  private uuid: any;

  constructor(@Inject('UUID') uuid) {
    this.uuid = uuid;
  }

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  addNewCar(data: CreateCarDto) {
    const car: CarModel = {
      id: this.uuid,
      ...data,
    };
    this.cars.push(car);
    return {
      message: 'Creado Exitosamente',
      car,
    };
  }

  updateCar(id: string, data: UpdateCarDto) {
    let cardDb = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        cardDb = {
          ...cardDb,
          ...data,
          id,
        };
        return cardDb;
      }
      return car;
    });

    return cardDb;
  }

  deleteCar(id: string) {
    let cardDb = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== cardDb.id);
    return {
      message: 'Eliminado correctamente',
    };
  }

  fillCarsWithSeedData(cars: CarModel[]) {
    this.cars = cars;
  }
}
