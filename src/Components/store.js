import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {reducer} from "../Redux/reducer";

export default createStore(reducer,applyMiddleware(logger))