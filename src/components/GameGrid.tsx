
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../Custom hooks/useGames';
import GameCard from './GameCard';
import GameSkeleton from './GameSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../Custom hooks/useGenres';
import { Platform } from '../Custom hooks/usePlatform';


interface Props{
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedSort: string | null;
  searchedText: string 
}

const GameGrid = ({ selectedGenre, selectedPlatform, selectedSort, searchedText }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform, selectedSort, searchedText);

  const SkeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <>
      {error && <Text>{error.message}</Text>}
      {/* <PlatformDropDown /> */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 4 }}
        padding={5}
        spacing={10}
      >
        {isLoading &&
          SkeletonArr.map((item) => (
            <GameCardContainer key={item}>
              {" "}
              <GameSkeleton />{" "}
            </GameCardContainer>
          ))}
        {data?.results.map((game: Game) => (
          <GameCardContainer key={game.id}>
            {" "}
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid