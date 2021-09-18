import { renderHook } from '@testing-library/react-hooks';
import { useGames } from '../src/hooks/useGames';
import { searchGames } from '../src/services/filterAndSearchService';

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

describe('Search games', () => {
  test('should return searched games', () => {
    const { result } = renderHook(() => useGames({
      games,
      sort: '',
      tags: [],
      minPrice: 0,
      query: 'csgo',
    },
    ));
    const searchedGames = searchGames(games, 'csgo');

    expect(result.current).toEqual(searchedGames);
  });
});
