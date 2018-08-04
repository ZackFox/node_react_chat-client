import * as types from "../constants/types";

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
