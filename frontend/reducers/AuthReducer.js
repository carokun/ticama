const INITIAL_STATE = { username: '', password: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'user_login':
            return Object.assign({}, state, action.user);
        case 'user_login_failed':
            return Object.assign({}, state, { username: '', password: '' });
        default:
            return state;
    }
};
