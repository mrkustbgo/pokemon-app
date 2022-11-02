import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

type Props = {};

const Content = (props: Props) => {
  return (
    <Box className="max-w-[78rem] my-0 mx-auto py-0 px-4 norder-2 border-black">
      <Box className="mt-[4.5rem] mx-0 mb-[10rem] flex justify-between items-center relative z-20">
        {/* DATA */}
        <VStack align="flex-start" spacing="12px" className="max-w-[26rem]">
          <Text fontWeight="bold" color="white" fontSize="2xl">
            #006
          </Text>
          <Heading color="white" as="h1" size="4xl">
            CHARIZARD
          </Heading>
          <Text color="white" noOfLines={[6]}>
            Charizard resembles a large traditional European dragon. Despite the
            similarity, Charizard is explicitly a Fire- and Flying-type Pokémon,
            rather than a Dragon-type, except in its "Mega Charizard X" form;
            However, he can learn Dragon-type attacks.
          </Text>
          <Button className="w-full bg-white text-orange-700 font-bold">
            More Details
          </Button>
        </VStack>
        {/* DIVIDER */}
        <Box className="absolute left-[50%] translate-x-[-50%] flex flex-col gap-6">
          <Image
            src="/divider-fire.svg"
            width={56}
            height={528}
            alt="pkoemon-logo"
          />
        </Box>
        {/* MAIN IMAGE */}
        <Image
          src="/img-charizard-min.png"
          width={488}
          height={528}
          alt="pkoemon-logo"
        />
      </Box>
    </Box>
  );
};

export default Content;
