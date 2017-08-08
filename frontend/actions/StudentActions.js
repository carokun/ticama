import axios from 'axios';

export const addExperience = (dispatch, newCompany, newStart, newEnd, newRole, newDescription, newLocation) => {
    return (dispatch) => {
        console.log({
          company: newCompany,
          startDate: newStart,
          endDate: newEnd,
          role: newRole,
          description: newDescription,
          location: newLocation
        });
        axios.post('/api/add/experience', {
          company: newCompany,
          startDate: newStart,
          endDate: newEnd,
          role: newRole,
          description: newDescription,
          location: newLocation
        })
        .then((response) => {
          if (response.data.experience) {
            dispatch({ type: 'add_experience', experience: response.data.experience });
          } else {
            dispatch({ type: 'add_experience_failed'});

          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'add_experience_failed' });
        })
    };
};

export const addSkill = (dispatch, skill) => {
    return (dispatch) => {
        axios.post('/api/add/skill', {
          skill
        })
        .then((response) => {
          if (!response.data.skill) {
            dispatch({ type: 'add_skill_failed' });
          } else {
            dispatch({ type: 'add_skill', skill: response.data.skill });
          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'add_skill_failed' });
        })
    };
};

export const addMainSkill = (dispatch, skill, description) => {
    return (dispatch) => {
        axios.post('/api/add/mainSkill', {
          skill,
          description
        })
        .then((response) => {
          if (!response.data.mainSkill) {
            dispatch({ type: 'add_mainSkill_failed' });
          } else {
            dispatch({ type: 'add_mainSkill', mainSkill: response.data.mainSkill });
          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'add_mainSkill_failed' });
        })
    };
};

export const updateBasicInfo = (dispatch, fname, lname, about, university, major, year, interests, linkedin, website, resume) => {
    return (dispatch) => {
        axios.post('/api/updateBasicInfo', {
          fname, lname, about, university, major, year, interests, linkedin, website, resume
        })
        .then((response) => {
          console.log(response.data.user);
          if (!response.data.user) {
            dispatch({ type: 'update_basic_info_failed' });
          } else {
            dispatch({ type: 'update_basic_info', user: response.data.user });
          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'update_basic_info_failed' });
        })
    };
};
