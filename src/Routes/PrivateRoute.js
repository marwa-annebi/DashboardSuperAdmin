import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../components/Auth/isLogin";
const PrivateRoute = ({ component: element, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <element {...props} /> : navigate("/signin")
      }
    />
  );
};
export default PrivateRoute;
