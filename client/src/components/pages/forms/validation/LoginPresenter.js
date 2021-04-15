import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPresenter = ({ children }) => {
  return (
    <section className="login-section my-3">
      <Row>
        <Col
          className="d-flex justify-content-start align-items-start flex-column px-5 mx-auto"
          lg={10}
        >
          <h1 className="login-section-title font-weight-bold my-2 mt-4">
            Sign In
          </h1>
          <div className="d-flex justify-content-center align-items-center my-2">
            <FaUserAlt style={{ fontSize: "1.5em" }} />
            <h4 className="login-section-subtitle text-capitalize my-0 ml-2 font-weight-normal">
              Sign In with Your Account
            </h4>
          </div>
          {children}
          <p className="text-capitalize my-2 font-weight-normal">
            Don't have an account?{" "}
            <Link className="link-to-register" exact to="/register">
              Sign Up
            </Link>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default LoginPresenter;
