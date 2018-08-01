import {
  REG_REQUEST,
  REG_SUCCESS,
  REG_FAILURE,
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
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch({ type: LOG_IN_SUCCESS, user: data.user });
      cb();
    })
    .catch(err => {
      cookies.remove("token");
      localStorage.removeItem("user");
      dispatch({ type: LOG_IN_FAILURE });
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

export const logOut = () => dispatch => {
  cookies.remove("token");
  localStorage.removeItem("user");
  dispatch({ type: LOG_OUT });
};
