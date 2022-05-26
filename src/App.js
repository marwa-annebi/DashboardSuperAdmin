import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ForgotPasswordScreen from "./components/Auth/forgetPassword/ForgetPassword";
import LoginForm from "./components/Auth/LoginForm";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ListOfCandidates from "./pages/ListOfCandidates";
import QuizMasters from "./pages/QuizMasters";
import Settings from "./pages/Settings";
import ForgotPassword from "./components/Auth/forgetPassword/ForgetPassword";
import ResetPassword from "./components/Auth/resetPassword/ResetPassword";
import EditUser from "./pages/EditUser";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginForm />} path="/login"></Route>
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
          <Route element={<Home />} path="/*" exact>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="quizmasters" element={<QuizMasters />} />
            {/*<Route path="quizmasters/edit/:id" element={<EditUser />} />*/}
            <Route path="billings" element={<Billing />} />
            <Route path="listofcandidates" element={<ListOfCandidates />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}
