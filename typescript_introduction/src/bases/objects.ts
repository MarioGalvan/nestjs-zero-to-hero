interface Pokemon {
  id: number;
  name: string;
}

export const pokemonIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
pokemonIds.push(22);

console.log(pokemonIds);

export const pokemon: Pokemon = {
  id: 1,
  name: "Pokemonsito",
};

const charmander: Pokemon = {
  id: 2,
  name: "Charmandersito",
};

const pokemons: Pokemon[] = [];
pokemons.push(pokemon, charmander);
console.log(pokemons);
