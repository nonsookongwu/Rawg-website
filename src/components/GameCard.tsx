
import { Game } from '../Custom hooks/useGames';
import { Card, CardBody, HStack, Heading, Image} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImage from '../Services/ImageUrl';
import Emojis from './Emojis';

interface Props{
    game: Game;
}

const GameCard = ({game}:Props ) => {
  return (
    <Card >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game?.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Emojis game={game}/>
      </CardBody>
    </Card>
  );
}

export default GameCard