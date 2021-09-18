import { useMemo } from 'react';
import {
  searchGames,
  sortByMinPrice,
  sortByPrice,
  sortByTags,
  sortByTitle,
} from '../services/filterAndSearchService';

export const useSortedGames = (games, sort, tags, minPrice) => {
  return useMemo(() => {
    let sortedGames = games;

    if (minPrice) {
      sortedGames = sortByMinPrice(sortedGames, minPrice);
    }

    if (sort === 'title') {
      sortedGames = sortByTitle(sortedGames, sort);
    }

    if (sort === 'price') {
      sortedGames = sortByPrice(sortedGames, sort);
    }

    if (tags.length) {
      sortedGames = sortByTags(sortedGames, tags);
    }

    return sortedGames;
  }, [games, sort, tags, minPrice]);
};

export const useGames = ({ games, sort, tags, minPrice, query }) => {
  const sortedGames = useSortedGames(games, sort, tags, minPrice);

  return useMemo(() => {
    return searchGames(sortedGames, query);
  }, [query, sortedGames]);
};
