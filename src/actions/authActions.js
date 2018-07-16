import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  FEATCH_USER,
  LOG_OUT,
} from "../constants/types";

import axios from "axios";
import cookies from "react-cookies";

export const logIn = formData => dispatch => {
  dispatch({ type: LOG_IN_REQUEST });
  axios
    .post("/api/v1/signin", formData)
    .then(({ data }) => {
      cookies.save("token", data.token);
      dispatch({ type: LOG_IN_SUCCESS, user: data.user });
    })
    .catch(err => {
      const message = err.response.data.message;
      dispatch({ type: LOG_IN_FAILURE, message });
    });
};

export const getAuthenticatedUser = () => dispatch => {
  dispatch({ type: FEATCH_USER });

  const headers = {
    Authorization: `Bearer ${cookies.load("token")}`,
  };

  axios
    .post("/api/v1/user", null, { headers })
    .then(({ data }) => {
      dispatch({ type: LOG_IN_SUCCESS, user: data.user });
    })
    .catch(err => {
      cookies.remove("token");
      const message = err.response.data.message;
      dispatch({ type: LOG_IN_FAILURE, message });
    });
};

// export const signUp = formData => dispatch => {
//     dispatch({ type: LOG_IN_SUCCESS });
//     axios
//       .post("/api/v1/signin", formData)
//       .then(({ data }) => {
//         // dispatch({type: LOG_IN_SUCCESS});
//         console.log(data);
//       })
//       .catch(err => {
//         const message = err.response.data.message;
//         console.log(message);
//         dispatch({ type: LOG_IN_FAILURE, message });
//       });
//   };

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
};
