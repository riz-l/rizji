// Import: Dependencies
import { combineReducers } from "redux";

// Import: Reducers
import userReducer from "./user/user.reducer";

// Export: combineReducers
export default combineReducers({
  user: userReducer,
});
