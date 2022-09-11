import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import SocialOauth from "../socialOauth/socialOauth";

const SignupUseform = () => {
    // --------------------------------------------------------------------------------------
    const { register, handleSubmit } = useForm();
    const { request, response } = useRequest();
    const navigate = useNavigate();
    let isValidate = true;
    // --------------------------------------------------------------------------------------
    const frontEndValidation = (data) => {
        // console.log(data);
        if (data.password !== data.rpassword) {
            isValidate = false;
            alert("password do not match");
        }
        return isValidate;
    };
    // --------------------------------------------------------------------------------------
    const makePostBody = (data) => {
        return {
            fname: data.fname,
            lname: data.lname,
            username: data.username,
            email: data.email,
            password: data.password,
            sendMail: data.sendMail,
        };
    };
    // --------------------------------------------------------------------------------------
    const onFormSubmit = (data) => {        
        frontEndValidation(data);
        if (isValidate) {
            let postBody = makePostBody(data);
            request("POST", `/user/create`, postBody);
        }
    };
    // --------------------------------------------------------------------------------------
    useEffect(() => {
        if (response) {
            console.log(response);
            localStorage.setItem("userToken", JSON.stringify(response));
            alert("user added");
            navigate("/login");
        }
    }, [response]);
    // --------------------------------------------------------------------------------------
    return (
        <div className="formContainer">
            <div className="signupHolder">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <h1 className="formTitle">Sign up</h1>
                    <p className="formPara">Please fill in this form to sign up.</p>
                    <hr />
                    {/* <label htmlFor="fname" className="lsFormLabel">First Name</label> */}
                    <input
                        className="formInput"
                        type="text"
                        placeholder="first name"
                        name='fname'
                        {...register("fname")}
                    />
                    {/* <label htmlFor="lname" className="lsFormLabel">Last name</label> */}
                    <input
                        className="formInput"
                        type="text"
                        placeholder="last name"
                        name='lname'
                        {...register("lname")}
                    />
                    {/* <label htmlFor="userName" className="lsFormLabel">User name</label> */}
                    <input
                        className="formInput"
                        type="text"
                        placeholder="user name"
                        name='username'
                        {...register("username")}
                    />
                    {/* <label htmlFor="email" className="lsFormLabel">Email</label> */}
                    <input className="formInput" type="email" placeholder="email" name='email' {...register("email")} />
                    {/* <label htmlFor="password" className="lsFormLabel">Password</label> */}
                    <input
                        className="formInput"
                        type="password"
                        placeholder="password"
                        name='password'
                        {...register("password")}
                    />
                    {/* <label htmlFor="rpassword" className="lsFormLabel">Repeat Password</label> */}
                    <input
                        className="formInput"
                        type="password"
                        placeholder="Repeat password"
                        name='rpassword'
                        {...register("rpassword")}
                    />
                    <label className="lsFormLabel">
                        <input type="checkbox" name="remember" {...register("sendMail")} /> Subscribe for newsletter
                    </label>
                    <div className="formButtons">
                        <input type="submit" value="Sign up" id="formSignup" />
                    </div>
                </form>
                <Link className='loginSignupToggle' to='/login'>Already have an account</Link>
                {/* <SocialOauth /> */}
            </div>
        </div>
    );
};

export default SignupUseform;
