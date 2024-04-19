import { combineReducers } from "redux";
import user from "./auth/userSlice";
import session from "./auth/sessionSlice";
const RootReducer = combineReducers({
  user,
  session,
});

export default RootReducer;
