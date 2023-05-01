import { combineReducers } from "redux"
import userReducer from "./reducers/userReducer";
import authReducer from './reducers/authReducer';
import selectedIndexReducer from "./reducers/selectedIndexReducer";
import postReducer from "./reducers/postReducer";
import profileReducer from "./reducers/profileReducer";
import { eventReducer } from './reducers/eventReducer';


const rootReducer = combineReducers({
  userReducer,
  authReducer,
  selectedIndexReducer,
  eventReducer,
  postReducer,
  profileReducer,
})


export default rootReducer;