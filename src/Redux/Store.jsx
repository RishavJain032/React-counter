import { legacy_createStore, applyMiddleware } from 'redux';
import logger from "redux-logger"
import Reducer from './Reducer';

const rishav = legacy_createStore(Reducer, applyMiddleware(logger));

export default rishav;