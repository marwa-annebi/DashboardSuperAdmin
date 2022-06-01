import React from "react";
import { useAuth } from "./auth";
export const RequiredAuth = () => {
  const auth = useAuth();

  if (!auth.user) {
    navigate("/login");
  }

  return <div>RequiredAuth</div>;
};
