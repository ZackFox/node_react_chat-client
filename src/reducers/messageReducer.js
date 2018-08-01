import { MESSAGES_REQUEST, MESSAGES_SUCCESS } from "../constants/types";

const initialState = {
  allMessages: null,
  isFetching: false,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_REQUEST:
      return { ...state, isFetching: true };
    case MESSAGES_SUCCESS:
      return { ...state, isFetching: false, allMessages: action.messages };
    default:
      return state;
  }
};
