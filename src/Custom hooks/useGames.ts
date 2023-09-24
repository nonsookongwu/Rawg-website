import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import APIClient, { FetchResponse } from "../Services/api-client";
import { Platform } from "./usePlatform";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

const apiClient = new APIClient<Game>('/games')

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSort: string | null,
  searchedText: string
) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: [
      "games",
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedSort,
      searchedText,
    ],
    queryFn: () => apiClient.getAll({
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        ordering: selectedSort,
        search: searchedText,
      }
    })
  });
  

export default useGames;
