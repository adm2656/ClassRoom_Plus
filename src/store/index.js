import { createStore, applyMiddleware } from "redux";
import projectApp from "../reducers";
import thunkMiddleware from "redux-thunk"; 

 const configureStore = (preloadedState)=>{
    return createStore(
        projectApp,
        //To show state on chrome and firefox redux dev tool extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),       
        preloadedState,

        applyMiddleware(
            //To dispatch function
            thunkMiddleware
        )
    )
}

export default configureStore;