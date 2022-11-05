import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { PokemonSearch } from "../../interfaces/poke-search-interface";
import { useGetPokemonListOfPokemonQuery } from "../../redux/services/pokemonApi";
import PokemonCard from "../PokemonCard";

const PokemonList: NextPage = () => {
  // offset should be dynamic
  // const offset = 9 * (page - 1);
  const offset = 9 * (1 - 1);
  const { data: pokemonList } = useGetPokemonListOfPokemonQuery(offset);

  return (
    <Box pt="170px">
      <Box className="grid gap-7 gap-y-40 grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3">
        {pokemonList &&
          pokemonList.map((pokeData: PokemonSearch) => (
            <PokemonCard key={pokeData.id} pokeData={pokeData} />
          ))}
      </Box>
    </Box>
  );
};

export default PokemonList;
