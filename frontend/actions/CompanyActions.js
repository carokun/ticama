import axios from 'axios';

export const updateBasicInfo = (dispatch, about, email, phone, website, industry) => {
    return (dispatch) => {
        axios.post('/api/basic/company/info', {
          about, email, phone, website, industry
        })
        .then((response) => {
          console.log(response.data.user);
          if (!response.data.user) {
            dispatch({ type: 'update_basic_info_failed' });
          } else {
            dispatch({ type: 'update_basic_company_info', user: response.data.user });
          }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'update_basic_info_failed' });
        })
    };
};
