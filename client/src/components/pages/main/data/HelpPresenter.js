import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "../../../utils/Spinner";

const HelpPresenter = ({ children, loading }) => {
  return loading ? (
    <div id="help">
      <Spinner />
      <Container className="my-5" style={{ opacity: "0.2" }}>
        <Row>
          <Col
            lg={8}
            className="d-flex justify-content-center align-items-center flex-column mx-auto"
          >
            <h1 className="text-center font-weight-bold">
              How can we help you?
            </h1>
            <hr />
            <input
              id="input-search"
              name="inputSearch"
              placeholder="Cari"
              type="text"
            />
            <Row className="my-5">{children}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <div id="help">
      <Container className="my-5">
        <Row>
          <Col
            lg={8}
            className="d-flex justify-content-center align-items-center flex-column mx-auto"
          >
            <h1 className="text-center font-weight-bold">
              How can we help you?
            </h1>
            <hr />
            <input
              id="input-search"
              name="inputSearch"
              placeholder="Cari"
              type="text"
            />
            <Row className="my-5">{children}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HelpPresenter;
