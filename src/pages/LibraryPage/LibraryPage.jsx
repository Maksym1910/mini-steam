import React from 'react';

import { useSelector } from 'react-redux';
import { libraryGamesSelector } from '../../shared/selectors/games-selector.js';

import Layout from '../../components/Layout/Layout';
import GamesList from '../../components/GamesList/GamesList';

const LibraryPage = () => {
  const libraryGames = useSelector(libraryGamesSelector);

  return (
    <Layout>
      <h2>My Games</h2>
      <GamesList games={libraryGames} />
    </Layout>
  );
};

export default LibraryPage;
