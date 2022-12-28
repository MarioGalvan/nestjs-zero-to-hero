import axios from "axios";
import { Move, PokenAPIResponse } from "../interface/pokeapi-response.interface";

export class Pokemon {
  constructor(public readonly id: number, public name: string) {
    this.id = id;
    this.name = name;
  }

  changeName(name: string) {
    this.name = name;
  }

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`;
  }

  public speak() {
    console.log(`${this.name}!! ${this.name}`);
    this.scream();
  }

  private scream() {
    console.log(`Scream ${this.name}`);
  }

  async getMoves():Promise<Move[]> {
    const { data } = await axios.get<PokenAPIResponse>("https://pokeapi.co/api/v2/pokemon/4");
    console.log(data.moves[0]?.move?.name);
    return data.moves;
  }
}

export const Charmander = new Pokemon(1, "Charmander");
Charmander.speak();
