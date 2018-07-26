import {
  ALL_ROOMS_REQUEST,
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILURE,
  LOG_OUT,
} from "../constants/types";

import cookies from "react-cookies";
import axios from "axios";

export const getRooms = () => dispatch => {
  dispatch({ type: ALL_ROOMS_REQUEST });
  const headers = {
    Authorization: `Bearer ${cookies.load("token")}`,
  };

  axios
    .get("/api/v1/rooms", { headers })
    .then(({ data }) => {
      dispatch({ type: ALL_ROOMS_SUCCESS, rooms: data.rooms });
    })
    .catch(err => {
      const message = err.response.data.message;
      dispatch({ type: ALL_ROOMS_FAILURE, message });
      dispatch({ type: LOG_OUT });
    });
};
