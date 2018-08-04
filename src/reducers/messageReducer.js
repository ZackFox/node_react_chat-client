import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  USER_START_TYPING,
  USER_STOP_TYPING,
  ADD_MESSAGE,
} from "../constants/types";

const initialState = {
  allMessages: [],
  isFetching: false,
  typing: "",
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_REQUEST:
      return { ...state, isFetching: true };
    case MESSAGES_SUCCESS:
      return { ...state, isFetching: false, allMessages: action.messages };
    case USER_START_TYPING:
      return { ...state, typing: action.text };
    case USER_STOP_TYPING:
      return { ...state, typing: "" };
    case ADD_MESSAGE:
      const messagesCopy = [...state.allMessages];
      messagesCopy.push(action.message);
      return { ...state, allMessages: messagesCopy };
    default:
      return state;
  }
};
