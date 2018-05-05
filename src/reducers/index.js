import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Registration from "./Registration";
import Course from "./Course";

const projectApp=combineReducers({
	Authentication,
	Registration,
	Course
});

export default projectApp;