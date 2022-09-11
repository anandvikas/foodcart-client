import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartAction,
  getWishlistAction,
  loginAction,
} from "../../store/actionCreators/actionCreator";
import "./loginSignup.css"
import SocialOauth from "../socialOauth/socialOauth";

const LoginUseform = () => {
  const { register, handleSubmit } = useForm();
  let isValidate = true;
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();
  const { request, response } = useRequest();
  const [resMessage, setResMessage] = useState(<></>);
  // --------------------------------------------------------------------------------------
  useEffect(() => {
    if (loggedIn.status) {
      navigate("/");
    }
  }, []);
  // --------------------------------------------------------------------------------------
  const frontEndValidation = () => {
    return;
  };
  // --------------------------------------------------------------------------------------
  const makePostBody = (body) => {
    return {
      username: body.username,
      password: body.password,
    };
  };
  // --------------------------------------------------------------------------------------
  const submitForm = (body) => {
    frontEndValidation();
    if (isValidate) {
      let postBody = makePostBody(body);
      request("POST", `/user/login`, postBody);
    }
  };
  // --------------------------------------------------------------------------------------
  useEffect(() => {
    if (response) {
      if (response.status === 'success') {
        // console.log(response);
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token: response.token })
        );
        dispatch(loginAction(response.data));
        dispatch(getCartAction({ userId: response.data._id }));
        dispatch(getWishlistAction({ userId: response.data._id }));
        navigate("/");
      } else {
        setResMessage(response.message);
      }
    }
  }, [response]);
  // --------------------------------------------------------------------------------------
  return (
    <>
      <div className="formContainer">
        <div className="loginHolder">
          <form onSubmit={handleSubmit(submitForm)}>
            <h1 className="formTitle">Log In</h1>
            <p className="formPara">Please fill in this form to log in.</p>
            <hr />
            {/* <label htmlFor="userName" className="lsFormLabel">User name</label> */}
            <input
              className="formInput"
              type="text"
              placeholder="User Name or Email"
              name='username'
              {...register("username")}
            />
            {/* <label htmlFor="password" className="lsFormLabel">Password</label> */}
            <input
              className="formInput"
              type="password"
              placeholder="Password"
              name='password'
              {...register("password")}
            />
            <div className="formButtons">              
              <input type="submit" value="Login" id="formLogin" />
            </div>
          </form>
          <p>{resMessage}</p>
          {/* <Link to="/forgotPassword">Forgot Password</Link> */}
          <Link className='loginSignupToggle' to='/signup'>Dont have an account</Link>
          {/* <SocialOauth /> */}
        </div>
      </div>
    </>
  );
};
export default LoginUseform;
