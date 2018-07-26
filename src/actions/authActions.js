import {
  REG_REQUEST,
  REG_SUCCESS,
  REG_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from "../constants/types";

import axios from "axios";
import cookies from "react-cookies";

export const logIn = (formData, cb) => dispatch => {
  dispatch({ type: LOG_IN_REQUEST });
  axios
    .post("/api/v1/signin", formData)
    .then(({ data }) => {
      cookies.save("token", data.token);
      dispatch({ type: LOG_IN_SUCCESS, user: data.user });
      cb();
    })
    .catch(err => {
      const message = err.response.data.message;
      dispatch({ type: LOG_IN_FAILURE, message });
    });
};

export const signUp = formData => dispatch => {
  dispatch({ type: REG_REQUEST });
  axios
    .post("/api/v1/signup", formData)
    .then(({ data }) => {
      dispatch({ type: REG_SUCCESS });
      console.log(data);
    })
    .catch(err => {
      const errors = err.response.data.errors;
      dispatch({ type: REG_FAILURE, errors });
    });
};

export const getAuthenticatedUser = () => dispatch => {
  dispatch({ type: FETCH_USER_REQUEST });

  const headers = {
    Authorization: `Bearer ${cookies.load("token")}`,
  };

  axios
    .get("/api/v1/user", { headers })
    .then(({ data }) => {
      dispatch({ type: FETCH_USER_SUCCESS, user: data.user });
    })
    .catch(err => {
      cookies.remove("token");
      dispatch({ type: LOG_OUT });
    });
};

export const logOut = () => dispatch => {
  cookies.remove("token");
  dispatch({ type: LOG_OUT });
};
