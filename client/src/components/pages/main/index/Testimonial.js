import React from "react";
import SEO from "../../SEO";

import TestimonialData from "../data/TestimonialData";
import TestimonialPresenter from "../data/TestimonialPresenter";

const Testimonial = ({data, loading}) => {
  return (
    <>
      <SEO title="Blog" description="Blog" content="Blog" />

      <TestimonialPresenter loading={loading}>
        <TestimonialData data={data} />
      </TestimonialPresenter>
    </>
  );
};

export default Testimonial;
