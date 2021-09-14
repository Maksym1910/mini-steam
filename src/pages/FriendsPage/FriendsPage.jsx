import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Layout from '../../components/Layout/Layout';

const FriendsPage = () => {
  const [filter, setFilter] = useState({});
  return (
    <Layout>
      <Search
        title='Friends'
        filter={filter}
        setFilter={setFilter}
      />
    </Layout>
  );
};


export default FriendsPage;
