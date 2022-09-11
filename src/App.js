import react, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import { NonPrivateRoutes, Privateroutes } from "./utils/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAction,
  getCartAction,
  getWishlistAction,
} from "./store/actionCreators/actionCreator";
import NavPrivate from "./components/navbar/navPrivate"
import useRequest from "./hooks/useRequest";
import NavNonPrivate from "./components/navbar/navNonPrivate";
import Footer from "./components/footer/footer";

const App = () => {
  const { loggedIn } = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState(null);
  const { request, response } = useRequest();
  //---------------------------------------------------------------------------
  let userToken = JSON.parse(localStorage.getItem("userToken"));
  useEffect(() => {
    if (userToken) {
      request("POST", "/user/autoLogin", { token: userToken.token });
    }
  }, []);
  useEffect(() => {
    if (response) {      
      setUserDetails(response?.data);
    }
  }, [response]);
  //---------------------------------------------------------------------------
  useEffect(() => {
    if (userDetails) {
      dispatch(loginAction(userDetails));
      dispatch(getCartAction({ userId: userDetails._id }));
      dispatch(getWishlistAction({ userId: userDetails._id }));
    }
  }, [userDetails]);
  //---------------------------------------------------------------------------
  return (
    <>
      {loggedIn.status ? (
        <>
          <NavPrivate />
          <Routes>
            {Privateroutes.map((element, index) => {
              return (
                <Route
                  key={index}
                  path={element.path}
                  element={<element.component />}
                />                
              );
            })}            
          </Routes>
        </>
      ) : (
          <>
            <NavNonPrivate />
            <Routes>
              {NonPrivateRoutes.map((element, index) => {
                return (
                  <Route
                    key={index}
                    path={element.path}
                    element={<element.component />}
                  />
                );
              })}
            </Routes>
          </>
        )}
      <Footer />
    </>
  );
};

export default App;
