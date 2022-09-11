import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartAction } from "../../store/actionCreators/actionCreator";

const AddToCart = ({ itemId }) => {
  const { userCart, loggedIn } = useSelector((state) => state.reducer1);
  const { userId, items } = userCart
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addToCart = () => {
    if (loggedIn.status) {
      dispatch(
        addCartAction({
          userId: userId,
          itemId: itemId,
        })
      );
    } else {
      alert("you must Log-in to add to cart")
      navigate('/login')
    }

  };
  // this will check the item is added to cart or not
  const [isAdded, setIsAdded] = useState(null);
  useEffect(() => {
    // if (!items || items.length < 1) return
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
      <button id='addToCart'>Added to cart</button>
    </>
  ) : (
      <>
        <button id='addToCart' onClick={addToCart}>Add to Cart</button>
      </>
    );
};

export default AddToCart;
