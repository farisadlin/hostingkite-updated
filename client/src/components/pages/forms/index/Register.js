import React from "react";
import RegisterValidation from "../validation/RegisterValidation";
import RegisterPresenter from "../validation/RegisterPresenter";
import SEO from "../../SEO";

const Register = () => {
  return (
    <>
    <SEO title="Register" description="Register" content="Register"/>

    <RegisterPresenter>
      <RegisterValidation />
    </RegisterPresenter>
    </>
  );
};

export default Register;
