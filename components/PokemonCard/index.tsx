import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PokemonSearch } from "../../interfaces/poke-search-interface";
import { pokemonTypes } from "../../utils/pokemonTypes";

type Props = {
  pokeData: PokemonSearch;
};

const PokemonCard: NextPage<Props> = ({ pokeData }) => {
  const [buttonColor, setButtonColor] = useState("");
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeData.id}.png`;

  const { id, name, height, weight } = pokeData;

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  useEffect(() => {
    pokemonTypes.map((type) => {
      if (type.name === pokeData?.types[0]?.type.name) {
        setButtonColor(type.color);
      }
    });
  }, []);

  return (
    <Box
      className="w-full h-[382px] bg-[green] flex flex-col items-center relative pt-28 rounded-3xl border border-solid"
      style={{
        // background: "rgba(6, 11, 40, 0.15)",
        borderTop: "rgb(36, 41, 63)",
        borderRight: "rgb(36, 41, 63)",
        borderLeft: "rgb(36, 41, 63)",
        borderBottom: "none",
        borderImage: "initial",
      }}
    >
      <Box className="w-full h-full rounded-3xl absolute"></Box>
      <Box className="absolute top-[-10.5rem]">
        <img src={imgUrl} alt="" className="w-64 h-64" />
      </Box>
      <Heading as="h4">{formatPokemonId(id)}</Heading>
      <Heading as="h3" className="capitalize">
        {name}
      </Heading>
      <Flex gap={4} alignItems="center" justifyContent="center">
        {pokeData.types.map((types) => (
          <span className="capitalize">{types.type.name}</span>
        ))}
      </Flex>
      <Flex gap={4} alignItems="center" justifyContent="center">
        <Text>{weight / 10} kg</Text>
        <Text>{height / 10} m</Text>
      </Flex>
      <Box className="h-12 absolute bottom-0 left-0 right-0">
        <Button
          bg={buttonColor}
          className="w-full flex gap-2 items-center text-white font-bold"
          height="full"
          style={{
            borderRadius: "0px 0px 1.5rem 1.1rem",
          }}
        >
          <Image src="/icon-bolt.svg" height={24} width={24} alt="bolt" />
          More Details
        </Button>
      </Box>
    </Box>
  );
};

export default PokemonCard;
