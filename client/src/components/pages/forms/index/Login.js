import React from "react";
import LoginValidation from "../validation/LoginValidation";
import LoginPresenter from "../validation/LoginPresenter";
import SEO from "../../SEO";

const Login = () => {
  return (
    <>
    <SEO title="Login" description="Login" content="Login"/>

    <LoginPresenter>
      <LoginValidation />
    </LoginPresenter>
    </>
  );
};

export default Login;
