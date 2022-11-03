import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <Box
      as="footer"
      className="w-[95%] lg:max-w-[78rem] m-auto border-t border-solid border-lineBorder mt-20 pb-7 sm:pb-3 sm:flex sm:items-center  sm:justify-between"
    >
      <Box className="pt-8 mb-6 sm:mb-4">
        <Text className="text-xs leading-[150%] font-normal mb-1">
          Image rights for Nintendo & The Pokémon Company
        </Text>
        <Text className="text-xs leading-[150%] font-normal">
          Data taken from API - pokeapi.co
        </Text>
      </Box>
      <Flex gap={20} className="ml-3 sm:ml-0">
        <Image
          src="/logo-linkedin.svg"
          width={32}
          height={32}
          alt="Linked logo"
        />
        <Image
          src="/logo-github.svg"
          width={32}
          height={32}
          alt="Github logo"
        />
        <Image
          src="/logo-telegram.svg"
          width={32}
          height={32}
          alt="Telegram Logo"
        />
      </Flex>
    </Box>
  );
};

export default Footer;
