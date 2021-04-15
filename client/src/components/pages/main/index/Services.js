import React from "react";
import ServicesData from "../data/ServicesData";
import ServicesPresenter from "../data/ServicesPresenter";

const Services = ({ data, loading }) => {
  return (
    <ServicesPresenter loading={loading}>
      <ServicesData data={data} />
    </ServicesPresenter>
  );
};

export default Services;
