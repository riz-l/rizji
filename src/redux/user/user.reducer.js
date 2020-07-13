// Import: userActionTypes
import { userActionTypes } from "./user.types";

// Initial State for the userReducer
const INITIAL_STATE = {
  currentUser: null,
};

// Reducer: userReducer
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

// Export: userReducer
export default userReducer;
