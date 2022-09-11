import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useRequest from "../../hooks/useRequest";

const ForgotPass = () => {
  const { register, handleSubmit } = useForm();
  const { request, response } = useRequest();
  const [resMessage, setResMessage] = useState(<></>);
  const submitForm = (data) => {
    console.log(data);
    request("POST", "/user/sendResetPassLink", data);
  };
  useEffect(() => {
    if (response) {
      setResMessage(response.message);
    }
  }, [response]);
  return (
    <div className="formContainer">
      <div className="loginHolder">
        <form onSubmit={handleSubmit(submitForm)}>
          <h1 className="formTitle">Forgot Password</h1>
          <p className="formPara">Please enter the registered email id.</p>
          <input
            className="formInput"
            type="email"
            placeholder="Registered Email ID"
            {...register("email")}
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

export default ForgotPass;
