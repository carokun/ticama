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

export const competitionRequest = (dispatch, competition) => {
  console.log('frontend', competition);
    return (dispatch) => {
        axios.post('/api/request/competition', {
          competition
        })
        .then((response) => {
          if (response.data.competition) {
            dispatch({ type: 'competition_request', competition: response.data.competition });
          } else {
            console.log('failed');
          }
        })
        .catch((err) => {
            console.log(err);
        })
    };
};
