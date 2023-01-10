import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import {
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          `Pokemon Existe en base de datos ${JSON.stringify(error.keyValue)}`,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new InternalServerErrorException('Algo salio mal');
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(FieldSearch: string) {
    let pokemon: any;

    if (!isNaN(+FieldSearch)) {
      pokemon = await this.pokemonModel.findOne({
        pokemonNumber: FieldSearch,
      });
    }

    if (!pokemon && isValidObjectId(FieldSearch)) {
      pokemon = await this.pokemonModel.findById(FieldSearch);
    }

    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: FieldSearch.toLocaleLowerCase().trim(),
      });
    }

    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with id, name or pokemonNumber ${FieldSearch} not found`,
      );
    }

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    let pokemon = await this.findOne(term);
    if (updatePokemonDto.name) {
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase().trim();
    }

    try {
      await pokemon.updateOne(updatePokemonDto, { new: true });
    } catch (error) {
      throw new HttpException(
        `Pokemon exist in DB ${JSON.stringify(error.keyValue)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      ...pokemon.toJSON(),
      ...updatePokemonDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
