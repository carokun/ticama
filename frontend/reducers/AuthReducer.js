const INITIAL_STATE = { username: '', password: '', fname: '', lname: '', email: '', title: '', about: '', university: '',
website: '', major: '', skills: [], linkedin: '', competitionExperience: [], workExperience: [], pastCompetitions: [],
mainSkills: [], currentCompetitions: [], type: ''};

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
