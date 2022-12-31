import { CarModel } from './../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: CarModel[] = [
  {
    id: uuid(),
    marca: 'Ford',
    model: 2021,
  },
  {
    id: uuid(),
    marca: 'Chevy',
    model: 2020,
  },
  {
    id: uuid(),
    marca: 'Toyota',
    model: 2019,
  },
  {
    id: uuid(),
    marca: 'Honda',
    model: 2018,
  },
];
