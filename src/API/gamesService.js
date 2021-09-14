const getGames = async () => {
  const response = await fetch('gamesData.json');
  return await response.json();
};

export {
  getGames,
};
