export const authAction = (isLoggedIn) => ({
  type: 'AUTH',
  payload: isLoggedIn,
});
