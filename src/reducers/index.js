import { combineReducers } from "redux";
import Menu from "./Menu";
import Authentication from "./Authentication";
import Registration from "./Registration";

const projectApp=combineReducers({
	Menu,
	Authentication,
	Registration
});

export default projectApp;