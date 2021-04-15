import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import {
  InitialValuesContact,
  ValidationSchemaContact,
  ValidationSubmitContact,
} from "./ValidationSchema";

const RegisterValidation = () => {
  const formik = useFormik({
    initialValues: InitialValuesContact,
    validationSchema: ValidationSchemaContact,
    onSubmit: ValidationSubmitContact,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="fullName"
        name="fullName"
        placeholder="Nama *"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.fullName && formik.errors.fullName
            ? "input-contact-error"
            : "input-contact my-2"
        }
      />
      {formik.touched.fullName && formik.errors.fullName && (
        <div className="input-error-message">{formik.errors.fullName}</div>
      )}
      <input
        id="email"
        name="email"
        placeholder="Email *"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.email && formik.errors.email
            ? "input-contact-error"
            : "input-contact my-2"
        }
      />
      {formik.touched.email && formik.errors.email && (
        <div className="input-error-message">{formik.errors.email}</div>
      )}

      <input
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Nomor Handphone *"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.phoneNumber && formik.errors.phoneNumber
            ? "input-contact-error"
            : "input-contact my-2"
        }
        type="number"
        min="0"
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <div className="input-error-message">{formik.errors.phoneNumber}</div>
      )}

      <textarea
        id="text"
        name="text"
        placeholder="Pesan *"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{ height: "200px", resize: "none" }}
        className={
          formik.touched.text && formik.errors.text
            ? "input-contact-error"
            : "input-contact my-2"
        }
      />
      {formik.touched.text && formik.errors.text && (
        <div className="input-error-message">{formik.errors.text}</div>
      )}

      <Button type="submit" variant="dark" className="my-2 d-flex flex-column">
        Submit
      </Button>
    </form>
  );
};

export default RegisterValidation;
