import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_RECEIVED,
  USER_SET_ID,
} from "../actions/constants";

const authReducer = (
  state = {
    token: null,
    userId: null,
    isAuthenticated: false,
    userData: null,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log("from reducer", action);
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isAuthenticated: true,
      };

    case USER_SET_ID:
      return {
        ...state,
        userId: action.userId,
        isAuthenticated: true,
      };
    case USER_PROFILE_RECEIVED:
      console.log("state id", state.userId);
      console.log("action id", action.userId);
      return {
        ...state,
        userData:
          state.userId === action.userId && state.userData === null
            ? action.userData
            : state.userData,
        isAuthenticated:
          state.userId === action.userId && state.userData === null,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
