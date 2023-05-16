import { combineReducers } from "redux"
import userReducer from "./reducers/userReducer";
import authReducer from './reducers/authReducer';
import postReducer from "./reducers/postReducer";
import profileReducer from "./reducers/profileReducer";
import friendReducer from "./reducers/friendReducer";
import kicksReducer from "./reducers/kicksReducer";
import { eventReducer } from './reducers/eventReducer';
import unionReducer from "./reducers/unionReducer";
import rootsReducer from './reducers/rootsReducer';


const allReducer = combineReducers({
  userReducer,
  authReducer,
  eventReducer,
  postReducer,
  rootsReducer,
  profileReducer,
  friendReducer,
  kicksReducer,
  unionReducer,
})


export default allReducer;