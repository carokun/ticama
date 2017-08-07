const INITIAL_STATE = { username: '', password: '', fname: '', lname: '', email: '', title: '', about: '', university: '',
website: '', major: '', skills: [], linkedin: '', competitionExperience: [], workExperience: [], pastCompetitions: [],
mainSkills: [], currentCompetitions: [], type: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'user_login':
            return Object.assign({}, state, action.user);
        case 'user_login_failed':
            return Object.assign({}, state, { username: '', password: '' });
        case 'add_experience':
            const newExperiences = state.workExperience.slice();
            newExperiences.push(action.experience);
            return Object.assign({}, state, { workExperience: newExperiences });
        case 'add_skill':
            const newSkills = state.skills.slice();
            newSkills.push(action.skill);
            return Object.assign({}, state, { skills: newSkills });
        default:
            return state;
    }
};
