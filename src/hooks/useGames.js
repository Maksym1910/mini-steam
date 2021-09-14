import { useMemo } from 'react';

export const useSortedGames = (games, sort, tags, minPrice) => {
  return useMemo(() => {
    let sortedGames = games;

    if (minPrice) {
      sortedGames = sortedGames.filter((game) => parseFloat(game.price) > minPrice);
    }

    if (sort === 'title') {
      sortedGames = [...sortedGames].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    if (sort === 'price') {
      sortedGames = [...sortedGames].sort((a, b) => parseFloat(a[sort]) - parseFloat(b[sort]));
    }

    if (tags.length) {
      sortedGames = sortedGames.filter((game) => game.tags.some((tag) => tags.includes(tag)));
    }

    return sortedGames;
  }, [games, sort, tags, minPrice]);
};

export const useGames = ({ games, sort, tags, minPrice, query }) => {
  const sortedGames = useSortedGames(games, sort, tags, minPrice);

  return useMemo(() => {
    return sortedGames.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedGames]);
};
