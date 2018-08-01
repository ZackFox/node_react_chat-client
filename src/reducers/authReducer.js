import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from "../constants/types";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.user,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        message: action.message,
      };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};
