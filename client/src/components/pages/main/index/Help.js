import React from "react";
import SEO from "../../SEO";
import HelpData from "../data/HelpData";
import HelpPresenter from "../data/HelpPresenter";

const Help = ({ data, loading }) => {
  return (
    <>
    <SEO title="Help" description="Help" content="Help"/>
    <HelpPresenter loading={loading}>
      <HelpData data={data}/>
    </HelpPresenter>
    </>
  )
};

export default Help;
