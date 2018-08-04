import * as types from "../constants/types";

import cookies from "react-cookies";
import axios from "axios";

export const getRooms = () => dispatch => {
  dispatch({ type: types.ALL_ROOMS_REQUEST });
  const headers = {
    Authorization: `Bearer ${cookies.load("token")}`,
  };

  axios
    .get("/api/v1/rooms", { headers })
    .then(({ data }) => {
      dispatch({ type: types.ALL_ROOMS_SUCCESS, rooms: data.rooms });
    })
    .catch(err => {
      const message = err.response.data.message;
      dispatch({ type: types.ALL_ROOMS_FAILURE, message });
      dispatch({ type: types.LOG_OUT });
    });
};

export const setActiveRoom = room => dispatch => {
  dispatch({ type: types.SET_ACTIVE_ROOM, activeRoom: room });
  dispatch({ type: types.MESSAGES_REQUEST });
};

export const getMessages = messages => dispatch => {
  dispatch({ type: types.MESSAGES_SUCCESS, messages });
};

export const setTyping = username => dispatch => {
  dispatch({ type: types.USER_START_TYPING, text: `${username} печатает...` });
};

export const clearTyping = () => dispatch => {
  dispatch({ type: types.USER_STOP_TYPING });
};

export const addMessage = message => dispatch => {
  dispatch({ type: types.ADD_MESSAGE, message });
};
