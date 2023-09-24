import { Badge } from '@chakra-ui/react';

interface Props{
    metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
    let color = ''
    if (metacritic > 75) {
        color = "green"
    } else if (metacritic > 60) {
      color = "yellow";
    } else {
      color = "";
    }
  return (
      <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={5}>{ metacritic}</Badge>
  )
}

export default CriticScore