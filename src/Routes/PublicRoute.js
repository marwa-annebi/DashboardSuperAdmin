import React from "react";
import { Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../components/Auth/isLogin";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          navigate("/dashboard")
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
