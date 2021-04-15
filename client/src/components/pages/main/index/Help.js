import React from "react";
import HelpData from "../data/HelpData";
import HelpPresenter from "../data/HelpPresenter";

const Help = ({ data, loading }) => {
  return (
    <HelpPresenter loading={loading}>
      <HelpData data={data}/>
    </HelpPresenter>
  )
};

export default Help;
