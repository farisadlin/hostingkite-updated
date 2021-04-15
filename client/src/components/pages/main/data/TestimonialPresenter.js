import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Spinner from "../../../utils/Spinner";

const TestimonialPresenter = ({ children, loading }) => {
  return loading ? (
    <section id="testimonial" className="testimonial-section">
      <Spinner />
      <Container className="my-5" style={{ opacity: "0.2" }}>
        <Row>
          <Col>
            <h1 className="text-center font-weight-bold text-uppercase">
              OUR TESTIMONIALS
            </h1>
            <hr />
          </Col>
          <Row>{children}</Row>
        </Row>
      </Container>
    </section>
  ) : (
    <section id="testimonial" className="testimonial-section">
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-center font-weight-bold text-uppercase">
              OUR TESTIMONIALS
            </h1>
            <hr />
          </Col>
          <Row>{children}</Row>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialPresenter;
