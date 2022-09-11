import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addWishlistAction } from "../../store/actionCreators/actionCreator";

const AddToWishlist = ({ itemId }) => {
  const { userWishlist, loggedIn } = useSelector((state) => state.reducer1);
  const { userId, items } = userWishlist
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addToWishlist = () => {
    if (loggedIn.status) {
      dispatch(
        addWishlistAction({
          userId: userId,
          itemId: itemId,
        })
      );
    } else {
      alert('You must Lon-in to add to wishlist')
      navigate('/login')
    }

  };

  // this will check the item is added to wishlist or not
  const [isAdded, setIsAdded] = useState(null);
  useEffect(() => {
    setIsAdded(
      items.find((val) => {
        if (!val.item) {
          return false
        } else {
          return val?.item?._id === itemId;
        }

      })
    );
  }, [items]);

  return isAdded ? (
    <>
      <button id='addToWishlist'>Added to wishlist</button>
    </>
  ) : (
      <>
        <button id='addToWishlist' onClick={addToWishlist}>Add to wishlist</button>
      </>
    );
};

export default AddToWishlist;
