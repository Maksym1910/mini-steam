export const sortByMinPrice = (games, minPrice) => {
  return games.filter((game) => parseFloat(game.price) > minPrice);
};

export const sortByTitle = (games, title) => {
  return [...games].sort((a, b) => a[title].localeCompare(b[title]));
};

export const sortByPrice = (games, price) => {
  return [...games].sort((a, b) => parseFloat(a[price]) - parseFloat(b[price]));
};

export const sortByTags = (games, tags) => {
  return games.filter((game) => game.tags.some((tag) => tags.includes(tag)));
};

export const searchGames = (games, query) => {
  return games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase()));
};
