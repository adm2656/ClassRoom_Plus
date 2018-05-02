import { createStore, applyMiddleware } from "redux";
import projectApp from "../reducers";
import thunk from "redux-thunk";

const configureStore = () => {
    return createStore(
        projectApp,
        //To show state on chrome and firefox redux dev tool extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

        applyMiddleware(
            //To dispatch function
            thunk
        )
    )
}

export default configureStore;