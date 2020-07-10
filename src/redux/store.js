// Import: Dependencies
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Import: Reducers
import rootReducer from "./root-reducer";

// Middlewares: logger
const middlewares = [logger];

// store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Export: store
export default store;
