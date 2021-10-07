export interface pokemonapi {
    count: number;
    next: string;
    results: Results[];
  }

  export interface Results {
    name: string;
    url: string;
    id?: string;
    details?: PokemonDetails;
    description?: string;
  }

  export interface PokemonDetails {
    name: string;
    id: number;
    sprites: Sprites;
    abilities?: Array<any>;
    types?: Array<any>;
    height:number;
    weight:number;
    forms?:Array<any>;
  }

  export interface Sprites {
    front_default: string;
  }