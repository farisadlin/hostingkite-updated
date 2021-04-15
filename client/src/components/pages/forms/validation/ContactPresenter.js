import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactPresenter = ({ children }) => {
  return (
    <section className="contact-section my-3">
      <Row>
        <Col
          className="d-flex justify-content-start align-items-start flex-column px-5 mx-auto"
          lg={10}
        >
          <h1 className="contact-section-title font-weight-bold my-2 mt-4 text-center">
            Contact Us
          </h1>
          <p className="my-2 font-weight-normal">
            Contact us about anything related to our company or services.
            We'll do our best to get back to you as soon as possible.
          </p>
          {children}
        </Col>
      </Row>
    </section>
  );
};

export default ContactPresenter;
