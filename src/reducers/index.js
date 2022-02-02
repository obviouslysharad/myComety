import { performUser } from "./performUser";
import { performMember } from "./performMember";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  performUser,
  performMember,
});

export default rootReducer;
