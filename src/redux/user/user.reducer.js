// Initial State for the userReducer
const INITIAL_STATE = {
  currentUser: null,
};

// Reducer: userReducer
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
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
