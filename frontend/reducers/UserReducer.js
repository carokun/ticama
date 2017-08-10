const BLANK_STATE = { username: '', password: '', fname: '', lname: '', email: '', title: '', about: '', university: '',
website: '', major: '', skills: [], linkedin: '', competitionExperience: [], workExperience: [], pastCompetitions: [],
mainSkills: [], currentCompetitions: [], type: ''};


export default (state = {}, action) => {
    switch (action.type) {
        case 'user_login':
            return Object.assign({}, state, action.user);
        case 'user_logout':
            return {};
        case 'user_login_failed':
            return Object.assign({}, state, { username: '', password: '' });
        case 'user_authenticated':
            return Object.assign({}, state, action.user);
        case 'add_experience':
            const newExperiences = state.workExperience.slice();
            newExperiences.push(action.experience);
            return Object.assign({}, state, { workExperience: newExperiences });
        case 'add_skill':
            const newSkills = state.skills.slice();
            newSkills.push(action.skill);
            return Object.assign({}, state, { skills: newSkills });
        case 'add_mainSkill':
            const newMainSkills = state.mainSkills.slice();
            newMainSkills.push(action.mainSkill);
            return Object.assign({}, state, { mainSkills: newMainSkills });
        case 'update_basic_info':
            const { fname, lname, about, university, major, year, interests, linkedin, website, resume } = action.user
            return Object.assign({}, state, { fname, lname, about, university, major, year, interests, linkedin, website, resume });
        case 'update_basic_company_info':
            return Object.assign({}, state, { about: action.user.about, email: action.user.email, phone: action.user.phone, website: action.user.website, industry: action.user.industry });
        default:
            return state;
    }
};
