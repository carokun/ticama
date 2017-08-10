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

export const authenticateUser = (dispatch) => {
    return (dispatch) => {
        axios.get('/api/authenticate/user')
        .then((response) => {
          if (!response.data.user) {
            dispatch({ type: 'user_not_authenticated' });
          } else {
            dispatch({ type: 'user_authenticated', user: response.data.user});
          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'user_not_authenticated', message: err });
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

export const registerStudent = (dispatch, username, password, repeatPassword, email, fname, lname, university, year, major,about) => {
    return (dispatch) => {
        console.log('attempting to register');
        axios.post('/api/register/student', {
          username, password, repeatPassword, email, fname, lname, university, year, major, about
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

export const registerCompany = (dispatch, username, password, repeatPassword, email, fname, about, website, industry, phone) => {
    return (dispatch) => {
      console.log('fname on frontend', fname);
        axios.post('/api/register/company', {
          username, password, repeatPassword, email, fname, about, website, industry, phone
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

export const registerClub = (dispatch, username, password, repeatPassword, email, name, about, website) => {
    return (dispatch) => {
        console.log('attempting to register');
        axios.post('/api/register/club', {
          username, password, repeatPassword, email, name, about, website
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

export const logoutUser = (dispatch) => {
    return (dispatch) => {
        axios.get('/api/logout')
        .then((response) => {
          if (response.data.success) {
            console.log('success');
            dispatch({ type: 'user_logout' });
          } else {
            dispatch({ type: 'user_logout_failed' });
          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'user_logout_failed' });
        })
    };
};
