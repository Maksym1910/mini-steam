import GamesPage from '../pages/GamesPage/GamesPage';
import LibraryPage from '../pages/LibraryPage/LibraryPage';
import FriendsPage from '../pages/FriendsPage/FriendsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import Login from '../pages/AuthPage/Login';
import Register from '../pages/AuthPage/Register';

export const privateRoutes = [
  { path: '/games', component: GamesPage, exact: true },
  { path: '/library', component: LibraryPage, exact: true },
  { path: '/friends', component: FriendsPage, exact: true },
  { path: '/profile', component: ProfilePage, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
  { path: '/register', component: Register, exact: true },
];
