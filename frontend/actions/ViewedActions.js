export const updateViewedUser = (dispatch, user) => {
  console.log(user);
    return {
      type: 'page_viewed',
      user
    }
};
