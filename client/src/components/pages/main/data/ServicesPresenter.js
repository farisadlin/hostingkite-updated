import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "../../../utils/Spinner";

const ServicesPresenter = ({ children, loading }) => {
  return loading ? (
    <section id="services">
      <Spinner />
      <Container className="my-5" style={{ opacity: "0.2" }}>
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center flex-column mx-auto"
          >
            <h1 className="text-center font-weight-bold text-uppercase">
              OUR SERVICES
            </h1>
            <hr />
            <p className="text-center font-weight-lighter text-secondary">
              We are one of the easiest website hosting platforms to use, and
              remain committed to providing our customers with one of the best
              hosting solutions on the market.
            </p>
          </Col>
        </Row>
        <Row>{children}</Row>
      </Container>
    </section>
  ) : (
    <section id="services">
      <Container className="my-5">
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center flex-column mx-auto"
          >
            <h1 className="text-center font-weight-bold text-uppercase">
              OUR SERVICES
            </h1>
            <hr />
            <p className="text-center font-weight-lighter text-secondary">
              We are one of the easiest website hosting platforms to use, and
              remain committed to providing our customers with one of the best
              hosting solutions on the market.
            </p>
          </Col>
        </Row>
        <Row>{children}</Row>
      </Container>
    </section>
  );
};

export default ServicesPresenter;
