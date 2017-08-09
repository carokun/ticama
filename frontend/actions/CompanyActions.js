import axios from 'axios';

export const updateBasicInfo = (dispatch, about, email, phone, website) => {
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
