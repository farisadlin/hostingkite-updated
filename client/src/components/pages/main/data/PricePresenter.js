import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Spinner from "../../../utils/Spinner";

const PricePresenter = ({ children, loading }) => {
  return loading ? (
    <section className="price-section bg-light" id="price">
      <Spinner />
      <Container className="py-5" style={{ opacity: "0.2" }}>
        <Row>
          <Col>
            <h1 className="text-center font-weight-bold text-uppercase">
              OUR PRICING
            </h1>
            <hr />
            <Row>{children}</Row>
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    <section className="price-section bg-light" id="price">
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="text-center font-weight-bold text-uppercase">
              OUR PRICING
            </h1>
            <hr />
            <Row>{children}</Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricePresenter;
