import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import Rating from '@mui/material/Rating';
import "./reviews.css"

const ViewReviews = ({ itemId }) => {
  const [reviewsArray, setReviewsArray] = useState(null);
  const { request, response } = useRequest();
  useEffect(() => {
    request("POST", "/reviews", { itemId: itemId });
  }, []);
  useEffect(() => {
    if (response) {
      if (response.success) {
        setReviewsArray(response.body.reviews);
      }
      //   console.log(response);
    }
  }, [response]);
  return (
    <div className='vrCon'>
      {reviewsArray &&
        reviewsArray.map((val) => {
          return (
            <div key={val._id}>
              <h3>{val.userName}</h3>
              <h4>Rating : <Rating
                value={val.rating}
                readOnly
              /></h4>
              <p>{val.message}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default ViewReviews;
