import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Registration from "./Registration";
import Course from "./Course";
import Docs from "./Docs";

const projectApp=combineReducers({
	Authentication,
	Registration,
	Course,
	Docs
});

export default projectApp;