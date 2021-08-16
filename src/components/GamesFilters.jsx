import React from 'react';
import FilterByTag from './FilterByTag';
import '../styles/filters.css';
import SortSelect from './SortSelect';

const GamesFilters = ({ filter, setFilter }) => {
  const filterByTags = (selectedTagInfo) => {
    let newFilters;
    if (!filter.tags.includes(selectedTagInfo.name)) {
      newFilters = { ...filter, tags: [...filter.tags, selectedTagInfo.name] };
    }
    if (!selectedTagInfo.checked) {
      newFilters = {
        ...filter,
        tags: filter.tags.filter((tag) => tag !== selectedTagInfo.name),
      };
    }
    setFilter(newFilters);
  };

  return (
    <section className="filter-section">
      <SortSelect
        defaultValue="Sort by"
        options={[
          { value: 'title', body: 'By title' },
          { value: 'price', body: 'By price' },
        ]}
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      />
      <FilterByTag
        tags={['indie', 'action', 'adventure']}
        onChange={filterByTags}
      />
    </section>
  );
};

export default GamesFilters;
