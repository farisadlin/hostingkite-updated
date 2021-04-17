import { useQuery } from "@apollo/client";
import React from "react";
import { Col } from "react-bootstrap";
import { GET_DATA_TESTIMONIAL } from "../../../graphql/queries";

const TestimonialData = () => {
  const {
    data: testimonialData,
    loading: testimonialLoading,
    error: testimonialError,
  } = useQuery(GET_DATA_TESTIMONIAL);

  if (testimonialLoading) return <div>Loading...</div>;
  const items = testimonialData.testimonial.map(
    ({ author, job_position, testimonial, url_avatar }, key) => {
      return (
        <Col
          key={key}
          lg={4}
          className="testimonial-container d-flex justify-content-center align-items-center flex-column my-5"
        >
          <div className="item-testimonial mx-2">
            <img
              className="author-image align-self-center"
              alt={author}
              src={url_avatar}
            ></img>
            <h5
              className="author-testimonial text-center"
              style={{ color: "black" }}
            >
              <span className="author-name">{author}</span>
              <br />
              <span className="author-position">({job_position})</span>
            </h5>
            <p className="testimonial-detail text-center my-3 mx-2">
              <q className="font-italic text-secondary">{testimonial}</q>
            </p>
          </div>
        </Col>
      );
    }
  );
  return items;
};

export default TestimonialData;
