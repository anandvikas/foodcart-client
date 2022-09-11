import axios from "axios";
import { useState } from "react";
import { PORT } from "../constant/api";
const useRequest = () => {
  const [response, setResponse] = useState(null);
  const request = (method, path, data) => {
    const url = `${PORT}${path}`;
    const config = {
      method,
      url,
      data,
    };
    // console.log(config);
    axios(config)
      .then((res) => {
        // console.log(res);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log("Something went wrong!");
      });
  };
  return {
    request,
    response,
  };
};

export default useRequest;
