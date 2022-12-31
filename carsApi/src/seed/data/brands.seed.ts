import { Brand } from './../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createAt: new Date().getTime(),
  },
];
