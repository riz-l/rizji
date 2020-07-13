// Import: userActionTypes
import { userActionTypes } from "./user.types";

// Function (and export): setCurrentUser
export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
