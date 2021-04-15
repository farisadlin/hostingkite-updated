import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SeparatorMid = () => {
    return (
      <section className="separator-mid-section d-flex justify-content-center align-items-center flex-column">
        <Container className="my-5">
          <Row >
            <Col lg={6} className="d-flex justify-content-center align-items-center flex-column mx-auto">
              <h2 className="font-weight-bold text-light text-center text-capitalize">Build your dream website today</h2>
              <p className="text-light text-center font-weight-lighter my-3">
                Hosting for every website. Unlimited storage, unmetered
                bandwidth, unbeatable hosting. This HostingKite got you covered.
              </p>
              <Button variant="warning" className="my-2">View Plan & Pricing</Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

export default SeparatorMid