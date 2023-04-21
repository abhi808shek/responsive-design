import { combineReducers } from "redux"
import userReducer from "./reducers/userReducer";
import authReducer from './reducers/authReducer';
import { eventReducer } from "./reducers/eventReducer";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  eventReducer
})


export default rootReducer;