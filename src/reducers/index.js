import { combineReducers } from "redux";
import Menu from "./Menu.js";
import UserInfo from "./UserInfo.js";

const projectApp=combineReducers({
	Menu,
	UserInfo
});

export default projectApp;
