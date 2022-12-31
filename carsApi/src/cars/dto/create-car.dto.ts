import { IsString,IsNumber } from 'class-validator';
import { ValidatorField } from 'src/common/validator-string';

export class CreateCarDto {
  @IsString({
    message: ValidatorField('marca', 'string'),
  })
  
  readonly marca: string;
  @IsNumber()
  readonly model: number;
}
