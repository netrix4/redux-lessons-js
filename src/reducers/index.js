import { combineReducers } from "redux";
import clickCounter from "./Counter";
import user from "./user";

export default combineReducers({ clickCounter, user });

