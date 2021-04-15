import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";

const BlogData = ({data}) => {
  const items = data.map(({ title, urlImg }, key) => {
    return (
      <Col
        key={key}
        lg={6}
        className="mx-auto my-3 d-flex justify-content-center align-items-center"
      >
        <Card className="bg-dark text-white">
          <Card.Img src={urlImg} alt="Card image" style={{ opacity: "0.4" }} />
          <Card.ImgOverlay className="d-flex justify-content-center align-items-center flex-column">
            <Card.Title className="text-center">{title}</Card.Title>
            <Button variant="dark">View More ...</Button>
          </Card.ImgOverlay>
        </Card>
      </Col>
    );
  });
  return (
    <>
      <Row>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center flex-column mx-auto"
        >
          <h1 className="text-center font-weight-bold text-uppercase">
            OUR BLOG
          </h1>
          <hr />
        </Col>
      </Row>
      <Row>{items}</Row>
    </>
  );
};

export default BlogData;
