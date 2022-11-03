import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import Content from "../HeroContent";
import Navbar from "../Navbar";
import { Waves } from "../Waves";

const HeroSection: NextPage = () => {
  return (
    <Box
      className="bg-cover bg-gradient-to-b from-[#ee8328] to-[#e14318] relative overflow-hidden 
    before:content-[''] before:block before:w-[25rem] before:h-[25rem] before:bg-cover 
    before:absolute before:top-[50%] before:left-[-12.5rem] before:translate-y-[-50%] before:bg-pokeball-svg 
    before:bg-no-repeat after:bg-pokeball-svg after:bg-no-repeat after:content-[''] after:block 
    after:w-[25rem] after:h-[25rem] after:bg-cover after:absolute after:top-[50%] after:right-[-12.5rem]
    after:translate-y-[-50%]"
    >
      {/* HEADER */}
      <Navbar />
      {/* CONTENT */}
      <Content />
      {/* WAVES */}
      <Waves />
    </Box>
  );
};

export default HeroSection;
