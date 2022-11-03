import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { BsLightningCharge } from "react-icons/bs";

const Content: NextPage = () => {
  return (
    <Box className="max-w-[78rem] my-0 mx-auto py-0 px-4">
      <Box className="mt-[4.5rem] mx-0 mb-[10rem] flex xl:flex-row flex-col justify-between items-center relative z-20">
        {/* DATA */}
        <Box
          className="max-w-[37.5rem]  
        text-center xl:text-left xl:max-w-[26.13rem]"
        >
          <Text fontWeight="bold" color="white" fontSize="2xl">
            #006
          </Text>
          <Heading color="white" as="h1" size="4xl">
            CHARIZARD
          </Heading>
          <Text color="white" noOfLines={[6]} className="my-2">
            Charizard resembles a large traditional European dragon. Despite the
            similarity, Charizard is explicitly a Fire- and Flying-type Pokémon,
            rather than a Dragon-type, except in its "Mega Charizard X" form;
            However, he can learn Dragon-type attacks.
          </Text>
          <Button
            leftIcon={<BsLightningCharge />}
            size="lg"
            className="w-full bg-white text-[#E14043] font-bold text-base"
          >
            More Details
          </Button>
        </Box>
        {/* DIVIDER */}
        <Box
          className="xl:flex hidden absolute left-[50%] translate-x-[-50%] 
         flex-col gap-6 before:content-[''] before:block before:w-[1px] 
        before:h-[13rem] before:my-0 before:mx-auto after:content-[''] after:block after:w-[1px] 
        after:h-[13rem] after:my-0 after:mx-auto before:bg-gradient-to-b before:from-[#EB7524] 
        before:to-[#ffffff] after:bg-gradient-to-b after:from-[#ffffff] after:to-[#EB7524]"
        >
          <Image
            src="/divider-fire.svg"
            width={56}
            height={528}
            alt="divider-logo"
          />
        </Box>
        {/* DIVIDER - HORIZONTAL */}
        <Box
          className="xl:hidden static flex flex-row items-center 
        my-8 mx-0 before:w-[13.25rem] before:h-[1px] after:w-[13.25rem] after:h-[1px]
        before:bg-gradient-to-l before:from-[#ffffff] before:to-[#EB7524]
        after:bg-gradient-to-r after:from-[#ffffff] after:to-[#EB7524]"
        >
          <Image
            src="/divider-fire.svg"
            width={56}
            height={528}
            alt="divider-logo"
          />
        </Box>
        {/* MAIN IMAGE */}
        <Image
          src="/img-charizard-min.png"
          width={488}
          height={528}
          alt="charizard-hero-img"
          priority
        />
      </Box>
    </Box>
  );
};

export default Content;
