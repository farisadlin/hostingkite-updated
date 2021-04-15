import React from "react";

import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import {
  InitialValuesLogin,
  ValidationSchemaLogin,
  ValidationSubmitLogin,
} from "./ValidationSchema";

const LoginValidation = () => {
  const formik = useFormik({
    initialValues: InitialValuesLogin,
    validationSchema: ValidationSchemaLogin,
    onSubmit: ValidationSubmitLogin,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.email && formik.errors.email
            ? "input-login-error"
            : "input-login my-2"
        }
      />
      {formik.touched.email && formik.errors.email && (
        <div className="input-error-message">{formik.errors.email}</div>
      )}

      <input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.password && formik.errors.password
            ? "input-login-error"
            : "input-login my-2"
        }
      />
      {formik.touched.password && formik.errors.password && (
        <div className="input-error-message">{formik.errors.password}</div>
      )}

      <Button type="submit" variant="dark" className="my-2">
        Submit
      </Button>
    </form>
  );
};

export default LoginValidation;
