import { Box, Button, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const SearchBar: NextPage = () => {
  return (
    <Box className="">
      <Button>
        <Image src="/icon-home.svg" height={24} width={24} alt="Icon Home" />
        Home
      </Button>
      <Flex></Flex>
    </Box>
  );
};

export default SearchBar;
