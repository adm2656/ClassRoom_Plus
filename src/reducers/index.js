import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Registration from "./Registration";
import Course from "./Course";
import Docs from "./Docs";
import Search from "./Search";

const projectApp=combineReducers({
	Authentication,
	Registration,
	Course,
	Docs,
	Search
});

export default projectApp;