import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  public brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return {
      message: 'brand created',
      success: true,
      brand,
    };
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandSearch = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandSearch.updateAt = new Date().getTime();
        brandSearch = { ...brandSearch, ...updateBrandDto, id };
        return brandSearch
      }
      return brand;
    });
  }

  remove(id: string) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== brandDb.id);
    return {
      message: 'Eliminado correctamente',
    };
  }
}
