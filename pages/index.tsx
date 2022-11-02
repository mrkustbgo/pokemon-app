import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PokemonList, SearchBar, HeroSection } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Stack className="w-[95%] lg:w-4/5 m-auto">
        <SearchBar />
        <PokemonList />
      </Stack>
    </>
  );
};

export default Home;
