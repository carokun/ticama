import axios from 'axios';

export const loginUser = (dispatch, username, password) => {
    return (dispatch) => {
        axios.post('/api/login', {
            username,
            password
        })
        .then((response) => {
          if (!response.data.user) {
            dispatch({ type: 'user_login_failed' });
          } else {
            dispatch({ type: 'user_login', user: response.data.user});

          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'user_login_failed' });
        })
    };
};

export const registerUser = (dispatch, username, password, repeatPassword) => {
    return (dispatch) => {
        console.log('attempting to register');
        axios.post('/api/register', {
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
