export const updateViewedUser = (dispatch, user) => {
    return {
      type: 'page_viewed',
      user
    }
};
