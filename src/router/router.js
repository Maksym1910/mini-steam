import Games from '../pages/GamesPage/Games';
import Library from '../pages/Library';
import Friends from '../pages/Friends';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

export const privateRoutes = [
  { path: '/games', component: Games, exact: true },
  { path: '/library', component: Library, exact: true },
  { path: '/friends', component: Friends, exact: true },
  { path: '/profile', component: Profile, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
];
