export default (state = {}, action) => {
    switch (action.type) {
        case 'page_viewed':
            console.log(action.user);
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
};
