import React from 'react'
import { Col } from "react-bootstrap";

const ServicesData = ({data}) => {
    const items = data.map(({ title, desc, url }, key) => {
        return (
          <Col key={key} className="item-container mt-5" lg={4} md={6}>
            <div className="item-circle">
              <i className={`${url} fa-4x d-flex justify-content-center align-items-center mx-auto`}></i>
            </div>
            <h4 className="text-center my-4">{title}</h4>
            <p className="text-center font-weight-lighter text-secondary">{desc}</p>
          </Col>
        );
      });
      return items
}

export default ServicesData
