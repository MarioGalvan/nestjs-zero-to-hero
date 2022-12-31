import { BrandsService } from './../brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDb() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsithSeedData(BRAND_SEED);
    return {
      succes: true,
      message: 'Seed Executed',
    };
  }
}
