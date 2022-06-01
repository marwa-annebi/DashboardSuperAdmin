import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ForgotPasswordScreen from "./components/Auth/forgetPassword/ForgetPassword";
import LoginForm from "./components/Auth/LoginForm";
import Billing from "./pages/Billing";
import Statistics from "./pages/Statistics";
import Home from "./pages/Home";
import ListOfCandidates from "./pages/ListOfCandidates";
import QuizMasters from "./pages/QuizMasters";
import Settings from "./pages/Settings";
import ForgotPassword from "./components/Auth/forgetPassword/ForgetPassword";
import ResetPassword from "./components/Auth/resetPassword/ResetPassword";
import EditUser from "./pages/EditUser";
import NotFound from "./components/NotFound/NotFound";
// import { AuthProvider } from "./components/Auth/auth";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const getUser = () => {
    let token = JSON.parse(localStorage.getItem("adminInfo"));
    // console.log(token);
    setIsLoggedIn(token);
    //window.location.reload(true);
  };

  useEffect(
    () => {
      getUser();
      // console.log("#isLoggedIn", isLoggedIn);
    },
    [],
    [isLoggedIn]
  );
  return (
    <>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route element={<Home />} path="/*" exact>
              <Route path="statistics" element={<Statistics />} />
              <Route path="settings" element={<Settings />} />
              <Route path="quizmasters" element={<QuizMasters />} />
              {/*<Route path="quizmasters/edit/:id" element={<EditUser />} />*/}
              <Route path="billings" element={<Billing />} />
              <Route path="listofcandidates" element={<ListOfCandidates />} />
            </Route>

            <Route element={<NotFound />} path="*" />
          </Routes>
        ) : (
          <Routes>
            <Route element={<NotFound />} path="/*" exact>
              <Route path="dashboard" element={<NotFound />} />
              <Route path="settings" element={<NotFound />} />
              <Route path="quizmasters" element={<NotFound />} />
              <Route path="billings" element={<NotFound />} />
              <Route path="listofcandidates" element={<NotFound />} />
            </Route>
            <Route element={<LoginForm />} path="/login" />
            <Route
              element={<ForgotPassword />}
              path="/lostPassword/:type"
              exact
            />
            <Route
              element={<ResetPassword />}
              path="/setNewPassword/:id/:resetToken/:type"
              exact
            />
            <Route element={<NotFound />} path="/*" />
          </Routes>
        )}
      </BrowserRouter>
      <Outlet />
    </>
  );
}
