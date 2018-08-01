import {
  ALL_ROOMS_REQUEST,
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILURE,
  SET_ACTIVE_ROOM,
} from "../constants/types";

const initialState = {
  allRooms: null,
  activeRoom: null,
  isFetching: false,
  message: "",
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ROOMS_REQUEST:
      return { ...state, isFetching: true };
    case ALL_ROOMS_SUCCESS:
      return { ...state, isFetching: false, allRooms: action.rooms };
    case ALL_ROOMS_FAILURE:
      return { ...state, isFetching: false };
    case SET_ACTIVE_ROOM:
      return { ...state, activeRoom: action.activeRoom };
    default:
      return state;
  }
};
