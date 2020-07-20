// Import: Dependencies
import { combineReducers } from "redux";

// Import: Reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// Export: combineReducers
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
