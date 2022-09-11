import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useRequest from "../../hooks/useRequest";
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';


const AddReview = ({ itemId }) => {
  const { userId, userName } = useSelector((state) => state.reducer1.loggedIn);
  const { register, handleSubmit } = useForm();
  const { request, response } = useRequest();

  const [value, setValue] = useState(5)

  let isValidate = true;

  const frontEndvalidation = (data) => {
    if (data.rating === "") {
      isValidate = false;
      alert("rating can't be empty");
    }
    return;
  };
  const makePostBody = (data) => {
    return {
      userName: userName,
      userId: userId,
      itemId: itemId,
      rating: parseInt(value),
      message: data.message,
    };
  };
  const submitForm = (data) => {
    isValidate = true;
    // console.log(data);
    frontEndvalidation(data);
    if (isValidate) {
      let postBody = makePostBody(data);
      // console.log(postBody);
      request("POST", "/reviews/addReview", postBody);
    }
  };
  useEffect(() => {
    if (response) {
      alert(response.message);
      window.location.reload();
    }
  }, [response]);
  return (
    <div className='csformdiv'>
      <form onSubmit={handleSubmit(submitForm)}>
        <h4>Add review</h4>
        {/* <input className="emailField" type="number" placeholder="rating" {...register("rating")} /> */}
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /><br />
        <label htmlFor="psw">Message</label>
        <textarea className='meField' type="text" placeholder="message" {...register("message")} />
        <div className="csButton">
          <input type="submit" value="submit" id="csSubmit" />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
