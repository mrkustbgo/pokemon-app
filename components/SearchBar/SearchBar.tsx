import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const SearchBar: NextPage = () => {
  return (
    <Stack className="border-b border-solid border-searchBarBorder pb-5">
      <Button className="bg-[#151a37] py-3 px-4 rounded-lg flex justify-center items-center gap-[0.5rem] font-bold text-white leading-[150%] border border-solid border-buttonBorder w-[111.83px] h-[50px]">
        <Image src="/icon-home.svg" height={24} width={24} alt="Icon Home" />
        Home
      </Button>
      <Box className="lg:flex lg:items-center lg:justify-between ">
        <Box>
          <Text className="text-2xl leading[135%] font-bold mb-4 ">
            Search by types
          </Text>
          SLIDER COMPONENT
        </Box>
        <form className="relative">
          <Input
            placeholder="Search Pokémon"
            size="lg"
            className="w-full lg:w-[432px] h-[56px] bg-transparent border-[0.13rem] border-solid border-inputBorder rounded-lg p-4 leading-[150%] font-normal text-white outline-none"
          />
          <Box className="absolute right-0 top-[50%] translate-y-[-50%] w-14 h-14 flex justify-center bg-inputBorder rounded-lg cursor-pointer">
            <Image
              src="/icon-search.svg"
              height={24}
              width={24}
              alt="Icon search"
            />
          </Box>
        </form>
      </Box>
    </Stack>
  );
};

export default SearchBar;
