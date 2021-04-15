import React from "react";

import TestimonialData from "../data/TestimonialData";
import TestimonialPresenter from "../data/TestimonialPresenter";

const Testimonial = ({data, loading}) => {
  return (
    <TestimonialPresenter loading={loading}>
      <TestimonialData data={data}/>
    </TestimonialPresenter>
  );
};

export default Testimonial;
