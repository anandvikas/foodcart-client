import { useDispatch, useSelector } from "react-redux";
import { rmCartAction } from "../../store/actionCreators/actionCreator";
import React, { useEffect, useState } from "react";
import CartItemCount from "./cartItemCount";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { imageLoader } from "../../helper/helper"

import "./cart.css"
import Rezorpay from "../../helper/razorpay";

const GetItems = ({ items, userId }) => {
  const dispatch = useDispatch();
  const rmFromCart = (itemId) => {
    dispatch(
      rmCartAction({
        userId: userId,
        itemId: itemId,
      })
    );
  };
  return (
    <div className="cartItemsCon">
      {
        items.map((item) => {
          return (
            item?.item ?
            <div className='cartItemList' key={item._id}>
              <div className="imgPart">
                <img src={imageLoader(item.item.image)} alt="" />
              </div>
              <div className="infoPart">
                <h3>{item.item.name}</h3>
                <p>₹{item.item.price}</p>
                <div className='apr'>
                  <CartItemCount userId={userId} item={item} />
                  <h3 className='ip'>₹{item.quantity * item.item.price}</h3>
                  <div className='rBtn'>
                    <Tooltip title="Remove" placement="top">
                      <DeleteIcon onClick={() => { rmFromCart(item.item._id) }} />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div> : null
          )
        })
      }
    </div>
  )
}

const GetPrice = ({ totalPrice, userId }) => {
  let tdc = 50

  return (
    <div className='cartCheckoutCon'>
      <Button id='ctBtn' >Total Price</Button>
      <div className='pricing'>
        <hr />
        <p><span>Item Charge</span><span>₹{totalPrice}</span></p>
        <p><span>Delivery Charge</span><span>₹{tdc}</span></p>
        <h3><span>Total</span><span>₹{totalPrice + tdc}</span></h3>
        <hr />
        {/* <Button id='orBtn' onClick={() => { alert('FAKE message : Order is placed') }}>Order</Button> */}
        <Rezorpay amt={totalPrice + tdc} userId={userId}/>
      </div>
    </div>
  )
}

const ViewCart = () => {
  const { items, userId } = useSelector((state) => state.reducer1.userCart);
  const [totalPrice, setTotalprice] = useState(0)

  const calculateTotalPrice = () => {
    let totalSum = 0
    for (let item of items) {
      if(!item.item) return
      totalSum += item.quantity * item.item.price
    }
    setTotalprice(totalSum)
  }

  useEffect(() => {
    calculateTotalPrice()
  }, [items])

  return (
    (items.length !== 0)
      ? <>
        <section className="cartPageCon">
          <div className='cartCon'>
            <GetItems items={items} userId={userId} />
            <GetPrice totalPrice={totalPrice} userId={userId}/>
          </div>
        </section>
      </>
      : <>
        <section className="cartPageCon">
          <h1 className='cartCon' style={{ textAlign: 'center' }}>
            Cart is empty
                </h1>
        </section>
      </>
  );
};

export default ViewCart;
