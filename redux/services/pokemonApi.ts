import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonList } from "../../interfaces/poke-list-interface";
import { PokemonSearch } from "../../interfaces/poke-search-interface";
import { PokemonType } from "../../interfaces/poke-type-interface";

const baseUrl = `https://pokeapi.co/api/v2`;


const handlePokemonListData = (data: any) => {
  try {
    return data?.results.map(async (pokemon: { name: string }) => {
      const response = await fetch(`${baseUrl}/pokemon/${pokemon?.name}`);
      const data = response.json()
      return data;
    })
  } catch (err) {
    return err;
  }
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemonListOfPokemon: builder.query({
      query: (offset: number | string) => ({
        url: `/pokemon?offset=${offset}&limit=9`,
        responseHandler: async (response) => {
          /* GET POKEMON LIST RESPONSE */
          const data = await response.json();

          /* HANDLE POKEMON DATA USING POKEMON LIST RESPONSE */
          const pokemonListData = handlePokemonListData(data);

          /* USE PROMISE CONSTRUCTOR TO HANDLE ALL POKEMON DATA RESPONSES */
          const result = Promise.all(pokemonListData);

          return result;
        },
      }),
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
  useGetPokemonDataQuery,
  useGetPokemonBySearchQuery,
  useGetPokemonListOfPokemonQuery,
  useGetPokemonByTypeQuery,
} = pokemonApi;
