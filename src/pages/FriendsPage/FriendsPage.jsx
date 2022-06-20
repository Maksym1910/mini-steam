import React, { useState } from 'react';

import Search from '../../components/Search/Search';
import Layout from '../../components/Layout/Layout';
import { TITLE } from './constants.js';

const FriendsPage = () => {
  const [filter, setFilter] = useState({});

  return (
    <Layout>
      <Search
        title={TITLE}
        filter={filter}
        setFilter={setFilter} />
    </Layout>
  );
};


export default FriendsPage;
