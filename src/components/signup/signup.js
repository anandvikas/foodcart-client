import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import { PORT } from "../../constant/api";
import { RenderInputFields, Input, Select, Button } from "../../form/form";

// --------------------------------------------------------------------------------------
const SubInput = ({ inputFields }) => {
  return <RenderInputFields inputFields={inputFields} />;
};

const SignUp = () => {
  let isValidate = true;
  // --------------------------------------------------------------------------------------
  const { request, response } = useRequest();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rpassword: "",
    gender: "male",
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
    if (formData.password !== formData.rpassword) {
      isValidate = false;
      alert("password do not match");
    }
    return isValidate;
  };
  // --------------------------------------------------------------------------------------
  const makePostBody = () => {
    return {
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
    };
  };
  // --------------------------------------------------------------------------------------
  const submitForm = (e) => {
    e.preventDefault();
    frontEndValidation();
    if (isValidate) {
      let postBody = makePostBody();
      request("POST", `/user/signup`, postBody);
    }
  };
  // --------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------
  useEffect(() => {
    if (response) {
      console.log(response);
      localStorage.setItem("userToken", JSON.stringify(response));
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
      type: "email",
      name: "email",
      placeholder: "Email",
      onchange: handleChange,
      value: formData.email,
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
      component: Input,
      type: "password",
      name: "rpassword",
      placeholder: "Repeat Password",
      onchange: handleChange,
      value: formData.rpassword,
    },
    {
      component: Select,
      name: "gender",
      onchange: handleChange,
      value: formData.gender,
      options: [
        {
          text: "Male",
          opValue: "male",
        },
        {
          text: "Female",
          opValue: "female",
        },
      ],
    },
    {
      component: Button,
      type: "submit",
      value: "Sign up",
    },
  ];
  // --------------------------------------------------------------------------------------
  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <SubInput inputFields={inputFields} />
        </form>
      </div>
    </>
  );
};
export default SignUp;
