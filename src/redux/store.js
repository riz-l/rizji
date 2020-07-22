// Import: Dependencies
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// Import: Reducers
import rootReducer from "./root-reducer";

// Middlewares: logger
const middlewares = [logger];

// Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Persistor
export const persistor = persistStore(store);

// Export: store
export default { store, persistor };
