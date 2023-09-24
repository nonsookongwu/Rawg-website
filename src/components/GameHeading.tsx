import { Heading } from "@chakra-ui/react";
import { Genre } from "../Custom hooks/useGenres";
import { Platform } from "../Custom hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  return (
    <>
      <Heading paddingLeft={5} marginBottom={3}>
        {" "}
        {selectedPlatform?.name} {selectedGenre?.name} Games
      </Heading>
    </>
  );
};

export default GameHeading;
