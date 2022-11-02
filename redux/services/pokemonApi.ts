import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonList } from "../../interfaces/poke-list-interface";
import { PokemonSearch } from "../../interfaces/poke-search-interface";
import { PokemonType } from "../../interfaces/poke-type-interface";

const baseUrl = `https://pokeapi.co/api/v2`;

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    //list of pokemon card which is 9 in the user inteface
    // const offset = 9 * (page - 1);
    getPokemonListOfPokemon: builder.query<PokemonList, string>({
      query: (offset) => `/pokemon?offset=${offset}&limit=9`,
    }),
    //fetch pokemon by type
    getPokemonByType: builder.query<PokemonType, string>({
      query: (type) => `pokemon/${type}`,
    }),
    //fetch pokemon by search
    getPokemonBySearch: builder.query<PokemonSearch, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonBySearchQuery,
  useGetPokemonListOfPokemonQuery,
  useGetPokemonByTypeQuery,
} = pokemonApi;
