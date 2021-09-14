import React from 'react';
import Layout from '../../components/Layout/Layout';
import GamesList from '../../components/GamesList/GamesList';
import { useSelector } from 'react-redux';

const LibraryPage = () => {
  const { libraryGames } = useSelector((state) => state.games);

  return (
    <Layout>
      <h2>My Games</h2>
      <GamesList games={libraryGames} />
    </Layout>
  );
};

export default LibraryPage;
