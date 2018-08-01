import { combineReducers } from "redux";
import authReducer from "./authReducer";
import roomReducer from "./roomReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
  auth: authReducer,
  rooms: roomReducer,
  messages: messageReducer,
});
