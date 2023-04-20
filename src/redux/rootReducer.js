import {combineReducers} from "redux"
import userReducer from "./reducers/userReducer";
import authReducer from './reducers/authReducer';


const rootReducer = combineReducers({
  userReducer,
  authReducer
})


export default rootReducer;