import { combineReducers } from "redux";
import { mailData } from "./reducer";
import { productData } from "./productReducer";
export default combineReducers({
  mailData,
  // productData,
});
