import { Box } from "@chakra-ui/react";
import React from "react";
import Content from "../HeroContent";
import Navbar from "../Navbar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <Box className="w-full h-[840px] bg-cover bg-gradient-to-b from-[#ee8328] to-[#e14318]">
      {/* HEADER */}
      <Navbar />
      {/* CONTENT */}
      <Content />
    </Box>
  );
};

export default HeroSection;
