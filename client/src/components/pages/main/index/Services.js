import React from "react";
import SEO from "../../SEO";
import ServicesData from "../data/ServicesData";
import ServicesPresenter from "../data/ServicesPresenter";

const Services = ({ data, loading }) => {
  return (
    <>
    <SEO title="Services" description="Services" content="Services"/>
    <ServicesPresenter loading={loading}>
      <ServicesData data={data} />
    </ServicesPresenter>
    </>
  );
};

export default Services;
