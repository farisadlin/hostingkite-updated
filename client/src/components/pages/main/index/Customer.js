import React from "react";
import CustomerData from "../data/CustomerData";
import CustomerPresenter from "../data/CustomerPresenter";

const Customer = ({ data, loading }) => {
  return (
    <CustomerPresenter loading={loading}>
      <CustomerData data={data} />
    </CustomerPresenter>
  );
};

export default Customer;
