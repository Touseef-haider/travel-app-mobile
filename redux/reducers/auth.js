import { AUTH } from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: "",
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH.SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
        isAuthenticated: true,
      };

    case AUTH.FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    case AUTH.REQUEST:
      return { ...state, loading: action.payload };

    default:
      return { ...state };
  }
}
