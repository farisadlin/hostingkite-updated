import React from 'react'
import { Col } from "react-bootstrap";


const HelpData = ({data}) => {
    const items = data.map(({ title, urlIcon }, key) => {
        return (
          <Col
            key={key}
            lg={3}
            md={4}
            sm={6}
            xs={6}
            className="help-items d-flex justify-content-start align-items-center flex-column my-5"
          >
            <i
              className={`${urlIcon} fa-4x d-flex justify-content-center align-items-center mx-auto`}
            ></i>
            <p className="text-center mt-2">{title}</p>
          </Col>
        );
      });
    return items
}

export default HelpData
