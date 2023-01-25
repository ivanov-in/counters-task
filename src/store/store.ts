import { createStore } from "redux";
import { countersReducer } from "./reducers/countersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(countersReducer, composeWithDevTools());
