import { AppModule } from 'src/app.module';
import { Module, forwardRef } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
  imports: [forwardRef(() => AppModule)],
})
export class CarsModule {}
