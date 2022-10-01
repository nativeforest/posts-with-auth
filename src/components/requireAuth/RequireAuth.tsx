import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({
  isAuth,
  children,
}: {
  isAuth: boolean;
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element | any {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export { RequireAuth }; 
