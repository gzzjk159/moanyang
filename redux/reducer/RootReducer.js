import { combineReducers } from "redux"
import compReducer from "./Competition.Reducer";

const rootReducer = combineReducers({
  compReducer,
});

export default rootReducer;