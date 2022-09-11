import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import Soc
import { RenderInputFields, Input, Button } from "../../form/form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartAction,
  getWishlistAction,
  loginAction,
} from "../../store/actionCreators/actionCreator";

// --------------------------------------------------------------------------------------
const SubInput = ({ inputFields }) => {
  return <RenderInputFields inputFields={inputFields} />;
};

const Login = () => {
  let isValidate = true;
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();
  // --------------------------------------------------------------------------------------
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);
  // --------------------------------------------------------------------------------------
  const { request, response } = useRequest();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  // --------------------------------------------------------------------------------------
  const handleChange = (event) => {
    // console.log(event);

    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    // event.target.focus = true;
  };
  // --------------------------------------------------------------------------------------
  const frontEndValidation = () => {
    return;
  };
  // --------------------------------------------------------------------------------------
  const makePostBody = () => {
    return {
      userName: formData.userName,
      password: formData.password,
    };
  };
  // --------------------------------------------------------------------------------------
  const submitForm = (e) => {
    e.preventDefault();
    frontEndValidation();
    if (isValidate) {
      let postBody = makePostBody();
      request("POST", `/user/login`, postBody);
    }
  };
  // --------------------------------------------------------------------------------------
  useEffect(() => {
    if (response) {
      console.log(response);
      localStorage.setItem("userToken", JSON.stringify(response));
      dispatch(loginAction(response));
      dispatch(getCartAction({ userId: response._id }));
      dispatch(getWishlistAction({ userId: response._id }));
      navigate("/");
    }
  }, [response]);
  // --------------------------------------------------------------------------------------
  const inputFields = [
    {
      component: Input,
      type: "text",
      name: "userName",
      placeholder: "User Name",
      onchange: handleChange,
      value: formData.userName,
    },
    {
      component: Input,
      type: "password",
      name: "password",
      placeholder: "Password",
      onchange: handleChange,
      value: formData.password,
    },
    {
      component: Button,
      type: "submit",
      value: "Log in",
    },
  ];
  // --------------------------------------------------------------------------------------
  return (
    <>
      <div>
        <h3>User Login</h3>
        <form onSubmit={submitForm}>
          <SubInput inputFields={inputFields} />
        </form>
      </div>
    </>
  );
};
export default Login;
