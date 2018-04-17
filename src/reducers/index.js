import { combineReducers } from "redux";
import Menu from "./Menu.js";
import Login from "./Login.js";

const projectApp=combineReducers({
	Menu,
	Login
});

export default projectApp;
