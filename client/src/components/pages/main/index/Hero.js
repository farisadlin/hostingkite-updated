import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../../assets/css/index.scss";

const Hero = () => {
    return (
      <header className="hero-section d-flex justify-content-center align-items-center flex-column" >
        <Container className="hero-container">
          <Row>
            <Col
              xl={9}
              className="d-flex justify-content-center align-items-center flex-column mx-auto"
            >
              <h1 className="hero-title text-center text-light my-2 font-weight-bold display-4">
                Best Web Hosting in Indonesia
              </h1>
              <p className="hero-desc text-center text-light my-4 font-weight-normal lead">
                The best Indonesian web hosting service with the most complete
                hosting features and 24-hours support for your ease of achieving
                online success!
              </p>
              <Button size="lg" className="my-2" variant="warning">
                Choose Now
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }

export default Hero;