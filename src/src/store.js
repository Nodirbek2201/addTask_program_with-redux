import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducers from "./Redux/rootReducers";

export default createStore(rootReducers,applyMiddleware(logger))

