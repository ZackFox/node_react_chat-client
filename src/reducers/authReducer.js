import {
  // REG_REQUEST,
  // REG_SUCCESS,
  // REG_FAILURE,
  // LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOG_OUT,
} from "../constants/types";

const initialState = {
  user: null,
  isLoggedIn: false,
  isSubmiting: false,
  fetchingUser: false,
  message: "",
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case REG_REQUEST:
    //   return { ...state, isSubmiting: true };
    // case REG_SUCCESS:
    //   return { ...state, isSubmiting: false, errors: [] };
    // case REG_FAILURE:
    //   return { ...state, isSubmiting: false, errors: action.errors };
    // case LOG_IN_REQUEST:
    //   return { ...state, isSubmiting: true };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isSubmiting: false,
        fetchingUser: false,
        user: action.user,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isSubmiting: false,
        fetchingUser: false,
        message: action.message,
      };
    case FETCH_USER_REQUEST:
      return { ...state, fetchingUser: true };
    case FETCH_USER_SUCCESS:
      return { ...state, fetchingUser: false, user: action.user };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};
