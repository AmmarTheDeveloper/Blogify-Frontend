import "./App.css";
import React, { useEffect } from "react";
import Router from "./components/Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/slice/isUserLoggedIn";
import { verifyUser } from "./validation/verifyUser";
import { Loading } from "./components/Loading/Loading";

const App = () => {
  const { isLoading, isProfileUpdated } = useSelector(
    (state) => state.userLoggedInState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let payload = await verifyUser();
      if (payload) {
        dispatch(
          setUser({
            _id: payload._id,
            name: payload.name,
            email: payload.email,
            profileImage: payload.profileImage,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    };
    fetchData();
  }, [isProfileUpdated]);

  if (isLoading) return <Loading center={true} />;

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
