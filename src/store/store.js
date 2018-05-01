import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import projectApp from '../reducers';

const store = createStore(
    projectApp,
    applyMiddleware(
        thunkMiddleware,
    )
);

export default store;
