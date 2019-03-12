import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWare = applyMiddleware(thunk, logger);

export default createStore(rootReducer, middleWare);
