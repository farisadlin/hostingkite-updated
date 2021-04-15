import React from "react";
import RegisterValidation from "../validation/RegisterValidation";
import RegisterPresenter from "../validation/RegisterPresenter";

const Register = () => {
  return (
    <RegisterPresenter>
      <RegisterValidation />
    </RegisterPresenter>
  );
};

export default Register;
