import React, { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Routes, Route, useActionData } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Signup from "./Components/Login/Content/Signup/Signup";
import Login from "./Components/Login/Content/Login/Login";
import NewPassword from "./Components/Login/Content/NewPassword/NewPassword";
import EnterCode from "./Components/Login/Content/EnterCode/EnterCode";
import User from "./Components/User/User";
import Friends from "./Components/Home/Friends/Friends";
import WelcomePage from "./Components/Login/Content/WelcomePage/WelcomePage";
import { useDispatch, useSelector } from "react-redux";
import { settingUserLoginData } from "./redux/actionCreators/userActionCreator";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ThankuModal from "./Components/Home/Modal/ThankuModal/ThankuModal";
import SharePostModal from "./Components/Home/Modal/SharePostModal/SharePostModal";
import UserProfilePage from "./Components/Home/ProfilePage/ProfilePage";
import VerifiedAccount from "./Components/Home/VerifiedAccount/VerifiedAccount";
import OriginalPostModal from "./Components/Home/Modal/OriginalPostModal/OriginalPostModal";
import CreatePostModal from "./Components/Home/Modal/CreatePostModal/CreatePostModal";
import UpdateProfile from "./Components/Home/UpdateProfile/UpdateProfile";
import Kicks from "./Components/Home/KicksPage/Kicks";
import SearchKicksPage from "./Components/Home/SearchKicksPage/SearchKicksPage";
import MyFriendsPage from "./Components/Home/MyFriendsPage/MyFriendsPage";
import FindFriendsPage from "./Components/Home/SearchFriendPage/SearchFriendsPage";
import FriendRequestPage from "./Components/Home/SearchFriendPage/SearchFriendsPage";
import MainView from "./Layouts/MainView";
import ChatPages from "./Components/Home/ChatPages/ChatPages";
import Select from "./Components/Home/Select/Select";
import Umeet from "./Components/Home/Umeet/Umeet/Umeet";
import Event from "./Components/Event/Event";
import CommentBox from "./Components/Home/PostContetnt/PostCard/CommentBox/CommentBox";
import CommentMenuModal from "./Components/Home/Modal/CommentMenuModal/CommentMenuModal";
import SignupOtp from "./Components/Login/Content/EnterCode/SignupOtp";
// import User from "./Components/Home/User/User"

const App = () => {
  const dispatch = useDispatch();
  let userData = localStorage.getItem("userCredential");
  userData = JSON.parse(userData);
  console.log("userData",userData);
  const isUserLoggedIn = () => {
    if (userData === null) {
      dispatch(settingUserLoginData(false, {}));
    } else {
      dispatch(
        settingUserLoginData(userData?.isLoggedIn, {
          email: userData.uemail,
        })
      );
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, [dispatch,userData]);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../../firebase-messaging-sw.js")
      .then((res) => {
        console.log("service worker registration successfull");
      })
      .catch((err) => console.log("service worker registration failed", err));
  }
  return (
    <>
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
          <Route
            exact
            path="verification/signup"
            element={<SignupOtp title="Verification starts now" />}
          />
          <Route exact path="createUser" element={<UpdateProfile />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="select" element={<Select />} />
          <Route path="/" element={<MainView />}>
            <Route path="root" element={<Home />} />
            <Route path="kicks" element={<Kicks />} />
            <Route path="myfriend" element={<MyFriendsPage />} />
            <Route path="find-friend" element={<FindFriendsPage />} />
            <Route path='profile' element={<UserProfilePage />} />
            <Route
              path="friend-request"
              element={<FriendRequestPage isFriend={true} />}
            />
            <Route path="chat-page" element={<ChatPages />} />
            <Route path="umeet" element={<Umeet />} />
            <Route exact path="event" element={<Event />} />

            {/* <Route path="user" element={<User />} /> */}
            {/* <Route path="friends" element={<Friends />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
