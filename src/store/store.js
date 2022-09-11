import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/reducer";
// creating store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// exporting store
export default store;
