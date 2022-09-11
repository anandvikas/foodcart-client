import axios from "axios";
import { PORT } from "../../constant/api";
import {
  SET_LOGIN,
  UPDATE_CART,
  UPDATE_WISHLIST,
} from "../actionTypes/actionTypes";
//LOGIN ACTIONS-----------------------------------------------------------------
export const loginAction = (userDetails) => {
  return {
    type: SET_LOGIN,
    payLoad: {
      status: true,
      userName: userDetails.username,
      userId: userDetails._id,
    },
  };
};

//CART ACTIONS-----------------------------------------------------------------
export const updateCartAction = (data) => {
  return {
    type: UPDATE_CART,
    payLoad: data,
  };
};
//-----------------------------------------------------------------------------
export const getCartAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/cart`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res);
        dispatch(updateCartAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("couldn't load the cart details");
      });
  };
};
//-----------------------------------------------------------------
export const addCartAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/cart/addToCart`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res.data);
        dispatch(updateCartAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("could't add to cart");
      });
  };
};
//-----------------------------------------------------------------
export const rmCartAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/cart/rmFromCart`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res.data);
        dispatch(updateCartAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("could't remove from cart");
      });
  };
};
export const cartItemCountAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/cart/changeCount`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res.data);
        dispatch(updateCartAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("could't change the quantity");
      });
  };
};

//WISHLIST ACTIONS-----------------------------------------------------------------
export const updateWishlistAction = (data) => {
  return {
    type: UPDATE_WISHLIST,
    payLoad: data,
  };
};
//-----------------------------------------------------------------
export const getWishlistAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/wishlist`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res.data);
        dispatch(updateWishlistAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("couldn't load the cart details");
      });
  };
};
//-----------------------------------------------------------------
export const addWishlistAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/wishlist/addToWishlist`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res.data);
        dispatch(updateWishlistAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("could't add to wishlist");
      });
  };
};
//-----------------------------------------------------------------
export const rmWishlistAction = (data) => {
  const config = {
    method: "POST",
    url: `${PORT}/wishlist/rmFromWishlist`,
    data,
  };
  return (dispatch) => {
    axios(config)
      .then((res) => {
        // console.log(res.data);
        dispatch(updateWishlistAction(res.data));
      })
      .catch((error) => {
        // console.log(error.message);
        alert("could't remove from cart");
      });
  };
};
