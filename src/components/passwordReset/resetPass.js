import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useRequest from "../../hooks/useRequest";
import { useLocation, Link } from "react-router-dom";
import queryString from "query-string";

const ResetPass = () => {
  const { register, handleSubmit } = useForm();
  const { request, response } = useRequest();
  const [resMessage, setResMessage] = useState(<></>);
  const { search } = useLocation();
  const queriesInObject = queryString.parse(search);
  let isValidate = true;

  const frontEndValidation = (data) => {
    if (data.password !== data.rpassword) {
      isValidate = false;
    }
  };

  const makePostBody = (data) => {
    return {
      password: data.password,
      token: queriesInObject.token,
      email: queriesInObject.email,
    };
  };
  const submitForm = (data) => {
    console.log(data);
    frontEndValidation(data);
    if (isValidate) {
      let postBody = makePostBody(data);
      request("POST", "/user/resetPass", postBody);
    }
  };
  useEffect(() => {
    if (response) {
      setResMessage(response.message);
      if (response.success) {
        setResMessage(
          <>
            {response.message} <Link to="/">Login</Link>
          </>
        );
      } else {
        setResMessage(response.message);
      }
    }
  }, [response]);
  return (
    <div className="formContainer">
      <div className="loginHolder">
        <form onSubmit={handleSubmit(submitForm)}>
          <h1 className="formTitle">Forgot Password</h1>
          <p className="formPara">Enter the new password</p>
          <input
            className="formInput"
            type="text"
            placeholder="New Password"
            {...register("password")}
          />
          <br />
          <input
            className="formInput"
            type="password"
            placeholder="Repeat New Password"
            {...register("rpassword")}
          />
          <div className="formButtons">
            <input type="submit" value="submit" id="formLogin" />
          </div>
        </form>
        <p>{resMessage}</p>
      </div>
    </div>
  );
};

export default ResetPass;
