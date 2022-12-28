class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  public speak() {
    console.log(`NO QUIERO HABLAR`);
  }

  private scream() {
    console.log(`NO QUIERO`);
  }
}

const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

export class PokemonDecorator {
  constructor(public readonly id: number, public name: string) {}

  @Deprecated("DEPRECAITO")
  public speak() {
    console.log(`${this.name}!! ${this.name}`);
  }
}

export const CharmanderDecorator = new PokemonDecorator(4, "Charmander");
CharmanderDecorator.speak();
console.log(CharmanderDecorator.speak())
