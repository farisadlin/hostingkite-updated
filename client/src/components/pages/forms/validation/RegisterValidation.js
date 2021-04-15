import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import {
  InitialValuesRegister,
  ValidationSchemaRegister,
  ValidationSubmitRegister
} from "./ValidationSchema";

const RegisterValidation = () => {
  const formik = useFormik({
    initialValues: InitialValuesRegister,
    validationSchema: ValidationSchemaRegister,
    onSubmit: ValidationSubmitRegister
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="fullName"
        name="fullName"
        placeholder="Nama"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.fullName && formik.errors.fullName
            ? "input-register-error"
            : "input-register my-2"
        }
      />
      {formik.touched.fullName && formik.errors.fullName && (
        <div className="input-error-message">{formik.errors.fullName}</div>
      )}
      <input
        id="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.email && formik.errors.email
            ? "input-register-error"
            : "input-register my-2"
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
            ? "input-register-error"
            : "input-register my-2"
        }
      />
      {formik.touched.password && formik.errors.password && (
        <div className="input-error-message">{formik.errors.password}</div>
      )}

      <input
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Nomor Handphone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.phoneNumber && formik.errors.phoneNumber
            ? "input-register-error"
            : "input-register my-2"
        }
        type="number"
        min="0"
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <div className="input-error-message">{formik.errors.phoneNumber}</div>
      )}

      <input
        id="address"
        name="address"
        placeholder="Alamat"
        type="address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.address && formik.errors.address
            ? "input-register-error"
            : "input-register my-2"
        }
      />
      {formik.touched.address && formik.errors.address && (
        <div className="input-error-message">{formik.errors.address}</div>
      )}

      <Button type="submit" variant="dark" className="my-2 d-flex flex-column">
        Submit
      </Button>
    </form>
  );
};

export default RegisterValidation;
