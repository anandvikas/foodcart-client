import { useDispatch, useSelector } from "react-redux";
import { rmWishlistAction } from "../../store/actionCreators/actionCreator";
import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { imageLoader } from "../../helper/helper"

const ViewWishlist = () => {
  const { items, userId } = useSelector((state) => state.reducer1.userWishlist);
  const dispatch = useDispatch();

  const rmFromWishlist = (itemId) => {
    dispatch(
      rmWishlistAction({
        userId: userId,
        itemId: itemId,
      })
    );
  };

  return (
    (items.length !== 0)
      ? <>
        <section className="cartPageCon">
          <div className='cartCon'>
            <div className="cartItemsCon">
              {items.map((item) => {
                return (
                  item?.item ?

                    <div className='cartItemList' key={item._id}>
                      <div className="imgPart">
                        <img src={imageLoader(item.item.image)} alt="" />
                      </div>
                      <div className="infoPart">
                        <h3>{item.item.title}</h3>
                        <p>₹{item.item.price}</p>
                        <div className='apr'>
                          <div className='rBtn'>
                            <Tooltip title="Remove" placement="top">
                              <DeleteIcon onClick={() => { rmFromWishlist(item.item._id) }} />
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                    : null
                );
              })}
            </div>
          </div>
        </section>
      </>
      : <>
        <section className="cartPageCon">
          <h1 className='cartCon' style={{ textAlign: 'center' }}>
            wishlist is empty
          </h1>
        </section>
      </>
  );
};

export default ViewWishlist;
