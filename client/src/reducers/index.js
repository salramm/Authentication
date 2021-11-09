import { combineReducers } from "redux";
import alert from './alert';
import auth from "./auth";
import profile from "./profile";
import league from "./league";


export default combineReducers({
    alert,
    auth,
    profile,
    league
});