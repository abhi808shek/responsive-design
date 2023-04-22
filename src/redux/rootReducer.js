import { combineReducers } from "redux"
import userReducer from "./reducers/userReducer";
import authReducer from './reducers/authReducer';
import selectedIndexReducer from "./reducers/selectedIndexReducer";
import postReducer from "./reducers/postReducer";


const rootReducer = combineReducers({
  userReducer,
  authReducer,
  selectedIndexReducer,
  postReducer
})


export default rootReducer;