import { useMemo } from 'react';

export const useSortedGames = (games, sort, tags, minPrice) => {
  const sortedGames = useMemo(() => {
    if (minPrice && tags.length) {
      const minPricedGames = games.filter((game) => parseFloat(game.price) > minPrice);
      return minPricedGames.filter((game) => game.tags.some((tag) => tags.includes(tag)));
    }

    if (minPrice) {
      return games.filter((game) => parseFloat(game.price) > minPrice);
    }

    if (sort === 'title' && tags.length) {
      const sortedGames = [...games].sort((a, b) => a[sort].localeCompare(b[sort]));
      return sortedGames.filter((game) => game.tags.some((tag) => tags.includes(tag)));
    }

    if (sort === 'price' && tags.length) {
      const sortedGames = [...games].sort((a, b) =>
        parseFloat(a[sort]) - parseFloat(b[sort]));
      return sortedGames.filter((game) => game.tags.some((tag) => tags.includes(tag)));
    }

    if (sort === 'title') {
      return [...games].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    if (sort === 'price') {
      return [...games].sort((a, b) => parseFloat(a[sort]) - parseFloat(b[sort]));
    }

    if (tags.length) {
      return games.filter((game) => game.tags.some((tag) => tags.includes(tag)));
    }

    return games;
  }, [sort, games, tags, minPrice]);
  return sortedGames;
};

export const useGames = ({ games, sort, tags, minPrice, query }) => {
  const sortedGames = useSortedGames(games, sort, tags, minPrice);

  const fullFilteredGames = useMemo(()=> {
    return sortedGames.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedGames]);

  return fullFilteredGames;
};
