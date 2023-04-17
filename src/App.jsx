import React, { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Routes, Route, useActionData } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Signup from "./Components/Login/Content/Signup/Signup";
import Login from "./Components/Login/Content/Login/Login";
import NewPassword from "./Components/Login/Content/NewPassword/NewPassword";
import EnterCode from "./Components/Login/Content/EnterCode/EnterCode";
import User from "./Components/Home/User/User";
import Friends from "./Components/Home/Friends/Friends";
import WelcomePage from "./Components/Login/Content/WelcomePage/WelcomePage";
import { useDispatch } from "react-redux";
import { settingUserLoginData } from "./redux/actionCreators/userActionCreator";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = () => {
    let userData = localStorage.getItem("userData");
    userData = JSON.parse(userData);
    if (userData === null) {
      dispatch(settingUserLoginData(false, {}));
    } else {
      dispatch(settingUserLoginData(true, { email: userData.email }));
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/auth" element={<LoginPage />}>
          <Route path="signup" element={<Signup />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="forgetpassword" element={<NewPassword />} />
          <Route
            exact
            path="entercode"
            element={<EnterCode title="Enter Code" />}
          />
          <Route
            exact
            path="verification"
            element={<EnterCode title="Verification starts now" />}
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="user" element={<User />} />
            <Route path="friends" element={<Friends />} />
          </Route>
        </Route>
      </Routes>
      <div className="w-full">{/* <Footer /> */}</div>
    </div>
  );
};

export default App;
