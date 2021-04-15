import React from "react";
import SEO from "../../SEO";
import PriceData from "../data/PriceData";
import PricePresenter from "../data/PricePresenter";

const Price = ({data, loading}) => {
  return (
    <>
    <SEO title="Price" description="Price" content="Price"/>
    <PricePresenter loading={loading}>
      <PriceData data={data}/>
    </PricePresenter>
    </>
  );
};

export default Price;
