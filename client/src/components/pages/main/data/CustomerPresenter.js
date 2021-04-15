import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const CustomerPresenter = ({children}) => {
    return (
        <div id="customers">
        <Container className="my-5">
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center flex-column mx-auto"
            >
              <h1 className="text-center font-weight-bold text-uppercase">
                OUR CUSTOMERS
              </h1>
              <hr />
            </Col>
          </Row>
          <Row>
              {children}
          </Row>
        </Container>
      </div>
    )
}

export default CustomerPresenter
