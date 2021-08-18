import Games from '../pages/GamesPage/Games';
import Library from '../pages/LibraryPage/Library';
import Friends from '../pages/FriendsPage/Friends';
import Profile from '../pages/ProfilePage/Profile';
import Login from '../pages/LoginPage/Login';

export const privateRoutes = [
  { path: '/games', component: Games, exact: true },
  { path: '/library', component: Library, exact: true },
  { path: '/friends', component: Friends, exact: true },
  { path: '/profile', component: Profile, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
];
