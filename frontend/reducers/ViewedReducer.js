export default (state = {}, action) => {
    switch (action.type) {
        case 'page_viewed':
            console.log('yoooooooo', action.view);
            return Object.assign({}, state, action.view);
        default:
            return state;
    }
};
