import React from 'react'
import { Col } from "react-bootstrap";

const CustomerData = ({data}) => {
    const items = data.map(({ name, url_logo }, key) => {
        return (
          <Col key={key} className="my-5 d-flex justify-content-center align-items-center" lg={4} md={6} sm={6}>
            <img className="customer-img" src={url_logo} alt={name}></img>
          </Col>
        );
      });
    return items
}

export default CustomerData
