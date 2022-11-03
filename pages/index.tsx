import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Footer, HeroSection, PokemonList, SearchBar } from "../components";

const Home: NextPage = () => {
  return (
    <>
      {/* HERO SECTION - HEADER */}
      <HeroSection />
      {/* CONTAINER BELOW HERO */}
      <Stack className="w-[95%] lg:max-w-[78rem] m-auto">
        {/* SEARCH BAR */}
        <SearchBar />
        {/* POKEMON LIST SECTION */}
        <PokemonList />
      </Stack>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
