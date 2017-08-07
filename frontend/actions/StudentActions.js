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
