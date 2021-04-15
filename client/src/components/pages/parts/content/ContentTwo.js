import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import "../../../assets/css/index.scss";
import Image from "../../../assets/img/content-two.png";

const ContentTwo = () => {
  return (
    <div className="bg-light">
      <section className="separator-up-section">
        <Container>
          <Row className="py-5">
            <Col
              className="d-flex justify-content-center align-items-center my-5"
              lg={5}
            >
              <img src={Image} alt="separator" className="separator-img" />
            </Col>
            <Col
              className="d-flex justify-content-start align-items-start flex-column mx-auto"
              lg={5}
            >
              <h3 className="font-weight-bold">
                Built by web pros. For, well, everyone.
              </h3>
              <p className="my-2 text-secondary">
                About 1/3 of our customers are web pros, so they know where the
                gettin’ is good. After all, we’ve been doing this since the
                Jurassic (aka since 2002) and hosted over 2 million sites. 
                <br />
                <br />
                We also know that pros and newbies alike all want a hosting
                provider that’s easy and that works. So our robust web hosting
                tools get the job done right, and are designed so that when you
                grow, your site can grow with you too. A scalable solution,
                indeed.
              </p>
              <ul className="separator-list my-2 text-secondary">
                <li>
                If you're not happy, we'll refund your hosting fees in the first 45 days
                </li>
                <li>
                The best ability is availability—so we make sure your site stays up.
                </li>
                <li>
                Create an online store so you can sell your goods and services.
                </li>
              </ul>
              <Button variant="warning" size="lg" className="my-2">
                Learn More{" "}
                <Badge>
                  <i className="fas fa-arrow-right"></i>
                </Badge>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContentTwo;
