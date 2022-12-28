import { HttpAdapter, PokeApiAdapter } from "../api/pokeApi.adapter";
import { Move, PokenAPIResponse } from "../interface/pokeapi-response.interface";
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    public readonly http: HttpAdapter
  ) {}

  changeName(name: string) {
    this.name = name;
  }

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`;
  }

  get urlPokemon(): string {
    return `https://pokeapi.co/api/v2/pokemon/${this.id}`;
  }

  public speak() {
    console.log(`${this.name}!! ${this.name}`);
    this.scream();
  }

  private scream() {
    console.log(`Scream ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokenAPIResponse>(this.urlPokemon);
    console.log(data.moves[0].move.name);
    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();
export const Charmander = new Pokemon(4, "Charmander", pokeApi);
Charmander.speak();
