export interface PokemonType {
  damage_relations: Damagerelations;
  game_indices: Gameindex[];
  generation: Doubledamagefrom;
  id: number;
  move_damage_class: Doubledamagefrom;
  moves: Doubledamagefrom[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: Pokemon[];
}

export interface Pokemon {
  pokemon: Doubledamagefrom;
  slot: number;
}

export interface Name {
  language: Doubledamagefrom;
  name: string;
}

export interface Gameindex {
  game_index: number;
  generation: Doubledamagefrom;
}

export interface Damagerelations {
  double_damage_from: Doubledamagefrom[];
  double_damage_to: Doubledamagefrom[];
  half_damage_from: Doubledamagefrom[];
  half_damage_to: Doubledamagefrom[];
  no_damage_from: any[];
  no_damage_to: any[];
}

export interface Doubledamagefrom {
  name: string;
  url: string;
}
