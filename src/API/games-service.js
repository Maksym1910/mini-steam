import { GAMES_API_URL } from './constants.js';

export const getGames = async () => {
  const response = await fetch(GAMES_API_URL);
  return await response.json();
};
