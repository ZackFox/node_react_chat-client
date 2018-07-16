import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  FEATCH_USER,
  LOG_OUT,
} from "../constants/types";

const initialState = {
  user: null,
  isLoggedIn: false,
  isSubmiting: false,
  isFetching: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { isSubmiting: true };
    case FEATCH_USER:
      return { isFetching: true };
    case LOG_IN_SUCCESS:
      return {
        isLoggedIn: true,
        isSubmiting: false,
        isFetching: false,
        user: action.user,
      };
    case LOG_IN_FAILURE:
      return {
        isSubmiting: false,
        isFetching: false,
        message: action.message,
      };
    case LOG_OUT:
      return { isLoggedIn: false, user: null };
    default:
      return state;
  }
};