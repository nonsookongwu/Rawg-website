import { useState } from 'react'
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './Custom hooks/useGenres';
import PlatformDropDown from './components/PlatformDropDown';
import { Platform } from './Custom hooks/usePlatform';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';


function App() {
  
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  
  const [selectedSort, setSelectedSort] = useState<string | null>(null)

  const [searchedText, setSearchedtext] = useState('');


  const handleFilterByGenre = (genre: Genre) => {
    setSelectedGenre(genre)
   
  }

  const handleFilterByPlatform = (platform:Platform) => {
    setSelectedPlatform(platform)
    
  }

  const handleFilterBySort = (order: string) => {
    setSelectedSort(order);
  };

  

  const handleSearch = (searchText: string) => {
    setSearchedtext(searchText);
    console.log(searchedText)
  };
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar onSearch={handleSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              onSelectGenre={handleFilterByGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          <HStack spacing={10} paddingLeft={5} marginBottom={3}>
            <PlatformDropDown
              selectedPlaform={selectedPlatform}
              onSelectPlatform={handleFilterByPlatform}
            />
            <SortSelector
              selectedSortOrder={selectedSort}
              onSelectSort={handleFilterBySort}
            />
          </HStack>
          <GameGrid
            selectedSort={selectedSort}
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            searchedText={searchedText}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App
