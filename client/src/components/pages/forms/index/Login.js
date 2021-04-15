import React from "react";
import LoginValidation from "../validation/LoginValidation";
import LoginPresenter from "../validation/LoginPresenter";

const Login = () => {
  return (
    <LoginPresenter>
      <LoginValidation />
    </LoginPresenter>
  );
};

export default Login;
