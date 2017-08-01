import axios from 'axios';

export const loginUser = (dispatch, username, password) => {
    return (dispatch) => {
        axios.post('/login', {
            username,
            password
        })
        .then((response) => {
          if (!response.user) {
            dispatch({ type: 'user_login_failed' });
          } else {
            dispatch({ type: 'user_login', user: response.user});
          }
        })
        .catch((err) => {
            dispatch({ type: 'user_login_failed' });
        })
    };
};

export const registerUser = (dispatch, username, password, repeatPassword) => {
    return (dispatch) => {
        axios.post('/register', {
          username,
          password,
          repeatPassword
        })
        .then((response) => {
          if (!response.success) {
            dispatch({ type: 'user_registration_failed' });
          } else {
            console.log(response.user);
            dispatch({ type: 'user_registration', user: response.user});
          }
        })
        .catch((err) => {
          dispatch({ type: 'user_registration_failed' });
        })
    };
};
