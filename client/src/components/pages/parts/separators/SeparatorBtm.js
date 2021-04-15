import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SeparatorBtm = () => {
  return (
    <section className="separator-btm-section d-flex justify-content-center align-items-center flex-column">
      <Container className="my-5">
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center flex-column mx-auto"
          >
            <h2 className="font-weight-bold text-light text-center text-capitalize">
              Let's Get Started!
            </h2>
            <p className="text-light text-center font-weight-lighter my-3">
              A ton of website hosting options, 99.9% uptime guarantee, free SSL
              certificate, easy WordPress installs, and a free domain for a
              year.
            </p>
            <Button variant="warning" className="my-2">
              Let's Do It!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SeparatorBtm;
