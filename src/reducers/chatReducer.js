import {
  ALL_ROOMS_REQUEST,
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILURE,
} from "../constants/types";

const initialState = {
  rooms: null,
  activeRoom: null,
  isFetching: false,
  message: "",
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ROOMS_REQUEST:
      return { isFetching: true };
    case ALL_ROOMS_SUCCESS:
      return { isFetching: false, rooms: action.rooms };
    case ALL_ROOMS_FAILURE:
      return { isFetching: false };
    default:
      return state;
  }
};
