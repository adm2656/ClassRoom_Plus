import { combineReducers } from "redux";
import Menu from "./Menu.js";
import User from "./User.js";

const projectApp=combineReducers({
	Menu,
	User
});

export default projectApp;
