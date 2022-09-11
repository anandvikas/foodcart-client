import React from "react";
import { useDispatch } from "react-redux";
import { cartItemCountAction } from "../../store/actionCreators/actionCreator";

const CartItemCount = ({ item, userId }) => {
  const dispatch = useDispatch();

  const decrease = () => {
    if (item.quantity <= 1) {
      return;
    }
    dispatch(
      cartItemCountAction({
        userId: userId,
        itemId: item.item._id,
        quantity: item.quantity - 1,
      })
    );
  };
  const increase = () => {
    if (item.quantity >= 5) {
      return;
    }
    dispatch(
      cartItemCountAction({
        userId: userId,
        itemId: item.item._id,
        quantity: item.quantity + 1,
      })
    );
  };

  return (
    <div className='pmBtn'>
      <button onClick={decrease}>-</button>
      <span>{item.quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default CartItemCount;
