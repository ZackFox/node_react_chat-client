import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from "../constants/types";

const initialState = {
  user: null,
  isLoggedIn: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        message: action.message,
      };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};
