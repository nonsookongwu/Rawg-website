import best from '../assets/bulls-eye.webp'
import better from '../assets/thumbs-up.webp'
import good from '../assets/meh.webp'
import { Game } from '../Custom hooks/useGames';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  game: Game;
}


const Emojis = ({game}:Props) => {
    const emojiMap: { [key: number]: ImageProps } = {
      3: { src: good, alt: "meh", boxSize: "25px" },
      4: { src: better, alt: "recommended", boxSize: "25px" },
      5: { src: best, alt: "superb!", boxSize: "35px" },
    };


  return (
      <Image marginTop={5} {...emojiMap[game.rating_top]}/>
  )
}

export default Emojis