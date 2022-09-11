import { combineReducers } from "redux";
import {
  SET_LOGIN,
  UPDATE_CART,
  UPDATE_WISHLIST,
} from "../actionTypes/actionTypes";

// let userToken = localStorage.getItem("userToken");

const initialState = {
  loggedIn: {
    status: false,
    userName: null,
    userId: null,
  },
  userCart: {
    userId: null,
    _id: null,
    items: [],
  },
  userWishlist: {
    userId: null,
    _id: null,
    items: [],
  },
};
const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return { ...state, loggedIn: action.payLoad };
    }
    case UPDATE_CART: {
      return { ...state, userCart: action.payLoad };
    }
    case UPDATE_WISHLIST: {
      return { ...state, userWishlist: action.payLoad };
    }
    default: {
      return initialState;
    }
  }
};

const rootReducer = combineReducers({
  reducer1: reducer1,
});
export default rootReducer;
