import {
  searchGames,
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

describe('sortService testing', () => {
  test('should return sorted by min price games', () => {
    const sortedGames = sortByMinPrice(games, 101);
    expect(sortedGames).toEqual([
      {
        'id': 3,
        'title': 'CSGO',
        'price': '200 UAH',
        'tags': ['adventure'],
        'addedToLibrary': false,
      },
    ]);
  });

  test('should return sorted by title games', () => {
    const sortedGames = sortByTitle(games, 'title');
    expect(sortedGames).toEqual([
      {
        'id': 3,
        'title': 'CSGO',
        'price': '200 UAH',
        'tags': ['adventure'],
        'addedToLibrary': false,
      },
      {
        'id': 1,
        'title': 'Doom Ethereal',
        'price': '79 UAH',
        'tags': ['indie'],
        'addedToLibrary': false,
      },
      {
        'id': 2,
        'title': 'Dota',
        'price': '100 UAH',
        'tags': ['action'],
        'addedToLibrary': false,
      },
    ]);
  });

  test('should return sorted by price games', () => {
    const sortedGames = sortByPrice(games, 'price');
    expect(sortedGames).toEqual([
      {
        'id': 1,
        'title': 'Doom Ethereal',
        'price': '79 UAH',
        'tags': ['indie'],
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
        'id': 3,
        'title': 'CSGO',
        'price': '200 UAH',
        'tags': ['adventure'],
        'addedToLibrary': false,
      },
    ]);
  });

  test('should return sorted by tags games', () => {
    const sortedGames = sortByTags(games, ['action']);
    expect(sortedGames).toEqual([
      {
        'id': 2,
        'title': 'Dota',
        'price': '100 UAH',
        'tags': ['action'],
        'addedToLibrary': false,
      },
    ]);
  });

  test('should return searched games', () => {
    const sortedGames = searchGames(games, 'dota');
    expect(sortedGames).toEqual([
      {
        'id': 2,
        'title': 'Dota',
        'price': '100 UAH',
        'tags': ['action'],
        'addedToLibrary': false,
      },
    ]);
  });
});
