import { useSortedGames } from '../src/hooks/useGames';
import { renderHook } from '@testing-library/react-hooks';
import {
  sortByMinPrice,
  sortByPrice,
  sortByTags,
  sortByTitle,
} from '../src/services/filterAndSearchService';

const games = [
  {
    'id': 3,
    'title': 'CSGO',
    'price': '200 UAH',
    'tags': ['adventure'],
    'addedToLibrary': false,
  },
  {
    'id': 2,
    'title': 'Dota',
    'price': '100 UAH',
    'tags': ['action'],
    'addedToLibrary': false,
  },
  {
    'id': 1,
    'title': 'Doom Ethereal',
    'price': '79 UAH',
    'tags': ['indie'],
    'addedToLibrary': false,
  },
];

describe('testing hooks', () => {
  test('should return sorted by price games', () => {
    const { result } = renderHook(() => useSortedGames(games, 'price', [], 0));
    const sortedGames = sortByPrice(games, 'price');

    expect(result.current).toEqual(sortedGames);
  });

  test('should return sorted by title games', () => {
    const { result } = renderHook(() => useSortedGames(games, 'title', [], 0));
    const sortedGames = sortByTitle(games, 'title');

    expect(result.current).toEqual(sortedGames);
  });

  test('should return sorted by min price games', () => {
    const { result } = renderHook(() => useSortedGames(games, '', [], 101));
    const sortedGames = sortByMinPrice(games, 101);

    expect(result.current).toEqual(sortedGames);
  });

  test('should return sorted by tags games', () => {
    const { result } = renderHook(() => useSortedGames(games, '', ['indie'], 0));
    const sortedGames = sortByTags(games, ['indie']);

    expect(result.current).toEqual(sortedGames);
  });

  test('should return sorted by all filters games', () => {
    const { result } = renderHook(() => useSortedGames(games, 'price', ['indie, action'], 100));
    const fullSortedGames =
      sortByMinPrice(sortByTags(sortByPrice(games, 'price'), ['indie, action']), 100);

    expect(result.current).toEqual(fullSortedGames);
  });
});
