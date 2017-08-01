import axios from 'axios';

export const loginUser = (dispatch, username, password) => {
    return (dispatch) => {
        axios.post('/login', {
            username,
            password
        })
        .then((response) => {
          if (!response.data.user) {
            dispatch({ type: 'user_login_failed' });
          } else {
            console.log('user', response.data.user);
            dispatch({ type: 'user_login', user: response.data.user});
          }
        })
        .catch((err) => {
            dispatch({ type: 'user_login_failed' });
        })
    };
};

export const registerUser = (dispatch, username, password, repeatPassword) => {
    return (dispatch) => {
        console.log('attempting to register');
        axios.post('/register', {
          username,
          password,
          repeatPassword
        })
        .then((response) => {
          console.log(response);
          if (!response.data.success) {
            dispatch({ type: 'user_registration_failed' });
          } else {
            console.log(response.data.user);
            dispatch({ type: 'user_registration', user: response.data.user});
          }
        })
        .catch((err) => {
          dispatch({ type: 'user_registration_failed' });
        })
    };
};
