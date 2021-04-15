import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import "../../../assets/css/index.scss";
import Image from "../../../assets/img/content-one.png";

const ContentOne = () => {
  return (
    <div className="bg-light">
      <section className="separator-up-section">
        <Container>
          <Row className="py-5">
            <Col
              className="d-flex justify-content-start align-items-start flex-column mx-auto"
              lg={5}
            >
              <h3 className="font-weight-bold">
                We help, as much or as little as you'd like, with perfecting
                every aspect of your website.
              </h3>
              <p className="my-2 text-secondary">
                The point is that HostingKite covers everything you could
                possibly need from a host. If you start with us, you’ll never
                need to switch to someone else.
              </p>
              <ul className="separator-list my-2 text-secondary">
                <li>
                  Enjoy perfect integration with WordPress and install it in one
                  click.
                </li>
                <li>
                  Increase your popularity with optional SEO & marketing
                  services.
                </li>
                <li>
                  Monitor your site with an integrated dashboard and included
                  analytics.
                </li>
                <li>Receive a FREE domain, customizable theme, and more.</li>
              </ul>
              <Button variant="warning" size="lg" className="my-2">
                Learn More{" "}
                <Badge>
                  <i className="fas fa-arrow-right"></i>
                </Badge>
              </Button>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-5"
              lg={5}
            >
              <img src={Image} alt="separator" className="separator-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContentOne;
