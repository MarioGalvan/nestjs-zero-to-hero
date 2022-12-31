import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { v4 as uuid } from 'uuid';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [
    {
      provide: 'UUID',
      useValue: uuid(),
    },
  ],
  exports: ['UUID'],
})
export class AppModule {}
