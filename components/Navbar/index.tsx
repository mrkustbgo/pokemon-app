import { Box, HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <Box className="flex justify-between items-center gap-4 pt-6 max-w-[78rem] my-0 mx-auto px-4">
      <Image
        src="/logo-pokemon.svg"
        width={153}
        height={56}
        alt="pokemon-logo"
      />
      <HStack spacing="1rem">
        <Image
          src="/logo-linkedin.svg"
          width={32}
          height={32}
          alt="linkedin-logo"
        />
        <Image
          src="/logo-github.svg"
          width={32}
          height={32}
          alt="github-logo"
        />
        <Image
          src="/logo-telegram.svg"
          width={32}
          height={32}
          alt="telegram-logo"
        />
      </HStack>
    </Box>
  );
};

export default Navbar;
