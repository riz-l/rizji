// Import: Dependencies
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// Import: Reducers
import rootReducer from "./root-reducer";

// Middlewares: logger
const middlewares = [];

// If the Node Environment is set to development (instead of test or production), display the logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Persistor
export const persistor = persistStore(store);

// Export: store
export default { store, persistor };
