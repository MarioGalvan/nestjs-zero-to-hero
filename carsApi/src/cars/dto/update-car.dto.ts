import { IsString, IsNumber, IsUUID, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsNumber()
  readonly model?: number;
  @IsString()
  readonly marca?: string;
}
