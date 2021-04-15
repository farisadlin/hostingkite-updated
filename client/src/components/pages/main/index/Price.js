import React from "react";
import PriceData from "../data/PriceData";
import PricePresenter from "../data/PricePresenter";

const Price = ({data, loading}) => {
  return (
    <PricePresenter loading={loading}>
      <PriceData data={data}/>
    </PricePresenter>
  );
};

export default Price;
