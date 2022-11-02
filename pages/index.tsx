import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PokemonList, SearchBar } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Stack className="w-4/5 m-auto">
        <SearchBar />
        <PokemonList />
      </Stack>
    </>
  );
};

export default Home;
