// actions
export const setUser = (user: firebase.User) => ({
  type: 'set_user',
  user: user
});

export const clearUser = () => ({
  type: 'clear_user'
});
