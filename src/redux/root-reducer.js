// Import: Dependencies
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// Import: Storage
import storage from "redux-persist/lib/storage";

// Import: Reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// Export: combineReducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// Export: combineReducers
export default persistReducer(persistConfig, rootReducer);
