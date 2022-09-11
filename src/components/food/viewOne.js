import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import AddToCart from "../cart/add";
import AddToWishlist from "../wishlist/add";
import AddReview from "../reviews/add";
import ViewReviews from "../reviews/view";
import { useSelector } from "react-redux";
import {imageLoader} from "../../helper/helper"
import "./viewOne.css"

const ViewOne = () => {
  const { status } = useSelector((state) => state.reducer1.loggedIn);
  const { id } = useParams();
  const { request, response } = useRequest();
  const [foodData, setFoodData] = useState(null);
  useEffect(() => {
    request("GET", `/product/getOne/${id}`);
  }, []);
  useEffect(() => {
    if (response) {
      setFoodData(response?.product);
    }
  }, [response]);
  return (
    foodData && (
      <>
        <div className='lpConBackground'>
          <div className='lpCon'>
            <div className='lpImgCon'>
              <img src={imageLoader(foodData.image)} alt="" style={{ width: '100%' }} />
            </div>
            <div className='lpTextCon'>
              <h1>{foodData.title}</h1>
              <h3>Catagory : {foodData.category}</h3>
              <h2 className='price'>₹ {foodData.price}</h2>
              <h4>
                Ingredients :{" "}
                {foodData.ingredient.map((val, index) => {
                  return <span key={index}> {val},</span>;
                })}
              </h4>              
              <p className='multilinePreview'>{foodData.description}</p>
              {/* <p className='rating'><strong>Average Rating : {foodData.avgRating}</strong></p> */}
              <AddToCart itemId={foodData._id} />
              <AddToWishlist itemId={foodData._id} />
            </div>
          </div>

        </div>
        <div className='rvCon'>
          {status && <AddReview itemId={foodData._id} />}
          <hr />
          <h2>Reviews</h2>
          <ViewReviews itemId={foodData._id} />
        </div>
      </>

    )
  );
};

export default ViewOne;
